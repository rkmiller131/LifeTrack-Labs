import React, { useState, useEffect } from 'react';
import Question from './Question.jsx';

export default function QuestionList({ id, questions, ratings, updateMaster }) {
  const [subQScore, setSubQScore] = useState({
    0: 0, //first subQ row, based on index. Ex: 0 for Q1 is row for "Crave sweets and/or..."
    1: 0,
    2: 0,
    3: 0,
    4: 0 //last subQ (all questions have 5 subQs)
  })
  const [subQTotal, setSubQTotal] = useState(0);
  const [qSummary, setQSummary] = useState({
    question_no: id,
    score: subQTotal
  });

  // whenever users select values for each subQuestion,
  // adjust the total for the overall Question
  useEffect(() => {
    updateSubQTotal();
  }, [subQScore])

  // Whenever we get a new total for the whole question,
  // update what the summary looks like
  // example: { question_no: 1, score: ___ }
  useEffect(() => {
    setQSummary((prev) => (
      {...prev, score: subQTotal}
    ));
  }, [subQTotal])

  // every time our summary for this question changes,
  // let's update the master tracker for all the questions
  useEffect(() => {
    updateMaster(id, qSummary);
  }, [qSummary])



  function updateSubQScore(key, value) {
    setSubQScore((prev) => (
      {...prev, [key]: value}
    ))
  }

  function updateSubQTotal() {
    const values = Object.values(subQScore);
    const total = values.reduce((accum, val) => (
      accum += val
    ), 0);
    setSubQTotal(total);
  }

  return (
    <div className="quiz-form">
      <h3>{`Question ${id}`}</h3>
      <div className="rating-row">
        <div className="empty-300px-wide" />
        {ratings.map((rating) => (<div className="rating">{rating}</div>))}
      </div>
      <div className="all-subQs">
        {questions.map((subQ, i) => (<Question question={subQ} updateSubQScore={updateSubQScore} row={i} key={i}/>))}
      </div>
    </div>
  )
}