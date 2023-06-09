const axios = require('axios');
const pool = require('./database/db');

const { glucoseDecisionPath } = require('./gluDecisionPath');
const { glucoseDecisionTree } = require('./gluDecisionTree');

exports.saveUserInfoToDb = (req, cb) => {
  const { email, results, response } = req.body;
  const resu = JSON.stringify(results);
  const resp = JSON.stringify(response);

  pool.query(
    `SELECT * FROM userinfo WHERE email = '${email}';`
  )
    .then((data) => {
      if (data.rows.length === 0) {
        pool.query(
          `INSERT INTO userinfo (email, results, response)
          VALUES ($1, $2, $3)`,
          [email, resu, resp],
        )
          .then(() => {console.log('user info inserted'); cb(null); })
          .catch((err) => {console.log('error saving user info ', err); cb(err); });
      } else {
        pool.query(
          `UPDATE userinfo SET results = $1, response = $2
          WHERE email = $3`,
          [resu, resp, email],
        )
          .then(() => {console.log('user info has been updated'); cb(null); })
          .catch((err) => {console.log('error updating user information'); cb(err); });
      }
    })
    .catch((err) => console.log(err));

}

exports.submitQuiz = (req, res) => {
  const { provide, protect, high, watch, email, results } = req.body;

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
    const request = {
      body: {
        email,
        results,
        response
      }
    }
    module.exports.saveUserInfoToDb(request, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(response);
      }
    });
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

exports.getResults = (req, res) => {
  const { email } = req.query
  pool.query(
    `SELECT * FROM userinfo WHERE email = $1`,
    [email],
  )
    .then((results) => {
      if (results.rows[0] === undefined) {
        res.status(409).json({error: 'Email not found'});
      } else {
        res.status(200).send(results.rows[0]);
      }
    })
    .catch((err) => {
      console.log(err);
    })
}

exports.evaluateLabs = (req, res) => {

  Object.byString = function(obj, str) {
    str = str.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    str = str.replace(/^\./, '');           // strip a leading dot
    var arr = str.split('.');
    for (var i = 0, n = arr.length; i < n; ++i) {
        var k = arr[i];
        if (k in obj) {
            obj = obj[k];
        } else {
            return;
        }
    }
    return obj;
  }
  const pathing = glucoseDecisionPath(req.body);
  const dbQuery = Object.byString(glucoseDecisionTree, pathing);
  console.log(dbQuery);
  res.send(dbQuery);
}

exports.getOneQuestion = (req, res) => {
  const question = req.query.question_no;
  pool.query(
    `SELECT
      (array_agg(array[q1, q2, q3, q4, q5])) AS questions
    FROM quizcontent WHERE id=${question}`,
  )
  .then((results) => {
    results.rows.forEach((row) => row.questions = row.questions[0])
    res.send(results.rows[0])
  })
}