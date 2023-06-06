const axios = require('axios');
const pool = require('./database/db');

exports.submitQuiz = (req, res) => {
  const { provide, protect, high, watch } = req.body;

  let category;
  if (provide.level === 'high' && protect.level === 'high') {
    category = 'provideProtect';
  } else if (provide.level === 'high') {
    category = 'provide';
  } else if (protect.level === 'high') {
    category = 'protect';
  } else {
    category = 'none';
  }

  const labs = new Set();
  function buildLabList(array) {
    array.forEach((question) => {
      pool.query(
        `SELECT labs FROM quizanatomy WHERE id = ${question.question_no}`,
      )
        .then((results) => {
          results.rows[0].labs.forEach((lab) => {
            labs.add(lab);
          })
        })
        .catch((err) => console.log('Error in selecting labs and placing in set ', err));
    })
  }
  // before shipping labs as response, do Array.from(labs)
  (async () => {
    await buildLabList(high);
    await buildLabList(watch);
  })();

  function buildRationaleList(array) {
    const statements = []
    array.forEach((question) => {
      statements.push(`id = ${question.question_no} `)
    })
    const endOfWhere = statements.join(' OR ');
    const query =
    `(SELECT COALESCE(json_agg(
      json_build_object(
        'question_no', id,
        'rationale', rationale
      )
    ), '[]') FROM quizanatomy
    WHERE ${endOfWhere})`;
    return query;
  }

  const highQuery = buildRationaleList(high);
  const watchQuery = buildRationaleList(watch);

  pool.query(
    `SELECT
        summary,
        ${highQuery} AS high,
        ${watchQuery} AS watch
      FROM pppsummary
      WHERE category = '${category}'`,
  )
  .then((results) => {
    results.rows[0].labs = Array.from(labs);
    return results.rows[0];
  })
  .then((response) => {
    res.status(201).send(response);
  })
  .catch((err) => console.log('QUERY ERROR ', err));

};

exports.getQuestions = (req, res) => {
  pool.query(
    `SELECT
        id,
        question_no,
        (array_agg(array[q1, q2, q3, q4, q5])) AS questions,
        ratings
      FROM quizcontent
      GROUP BY ratings, question_no, id
      ORDER BY id;`,
  )
  .then((results) => {
    // don't quite understand how to get rid of nexted array in pool query,
    // so here is a sloppy fix:
    results.rows.forEach((row) => row.questions = row.questions[0])
    res.status(200).send(results.rows);
  })
  .catch((err) => res.status(500).send(err));
};