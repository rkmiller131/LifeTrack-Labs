import React, { useState, useEffect } from 'react';
import Question from './Question.jsx';

export default function QuestionList({ id, questions, ratings, updateTotals }) {
  const [subQScore, setSubQScore] = useState({
    0: 0, //first subQ row, based on index
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

  useEffect(() => {
    setQSummary((prev) => (
      {...prev, score: subQTotal}
    ));
  }, [subQTotal])

  useEffect(() => {
    if (subQTotal > 10) {
      // update the running totals for all questions
      updateTotals('high', null, [qSummary])
    }
  }, [qSummary])

  useEffect(() => {
    updateSubQTotal();
  }, [subQScore])

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
    <form className="quiz-form">
      <h3>{`Question ${id}`}</h3>
      <div className="rating-row">
        <div className="empty-300px-wide" />
        {ratings.map((rating) => (<div className="rating">{rating}</div>))}
      </div>
      <div className="all-subQs">
        {questions.map((subQ, i) => (<Question question={subQ} qId={id} updateSubQScore={updateSubQScore} row={i} key={i}/>))}
      </div>
    </form>
  )
}