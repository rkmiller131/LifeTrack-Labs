import React from 'react';
import RadioButtons from './RadioButtons.jsx';

export default function Question({ question, qId, updateSubQScore, row }) {
  let style;
  if (row % 2 !== 0) {
    style = {
      background: 'rgba(189, 187, 182, 0.5)'
    }
  }
  const buttons = [1, 2, 3, 4];
  return(
    <div className="subQ-container" style={style}>
      <div className="subQ">{question}</div>
      {buttons.map((button, i) => (<RadioButtons label={i} qId={qId} question={question} updateSubQScore={updateSubQScore} row={row} key={i}/>))}
    </div>
  )
}