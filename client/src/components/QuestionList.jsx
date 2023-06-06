import React, { useState } from 'react';
import Question from './Question.jsx';

export default function QuestionList({ id, questions, ratings }) {
  return (
    <form className="quiz-form">
      <h3>{`Question ${id}`}</h3>
      <div className="rating-row">
        <div className="empty-300px-wide" />
        {ratings.map((rating) => (<div className="rating">{rating}</div>))}
      </div>
      <div className="all-subQs">
        {questions.map((subQ, i) => (<Question question={subQ} key={i}/>))}
      </div>
    </form>
  )
}