import React from 'react';
import RadioButtons from './RadioButtons.jsx';

export default function Question({ question, qId, updateSubQScore, row }) {
  const buttons = [1, 2, 3, 4];
  return(
    <div className="subQ-container">
      <div className="subQ">{question}</div>
      {buttons.map((button, i) => (<RadioButtons label={i} qId={qId} question={question} updateSubQScore={updateSubQScore} row={row} key={i}/>))}
    </div>
  )
}