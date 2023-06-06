import React from 'react';
import RadioButtons from './RadioButtons.jsx';

export default function Question({ question }) {
  const buttons = [1, 2, 3, 4];
  return(
    <div className="subQ-container">
      <div className="subQ">{question}</div>
      {buttons.map((button, i) => (<RadioButtons label={i} key={i}/>))}
    </div>
  )
}