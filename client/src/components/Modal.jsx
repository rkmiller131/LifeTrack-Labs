import React, { useState } from 'react';
import axios from 'axios';
import Question from './Question.jsx';

export default function Modal({ toggleModal, followUp, setTemporaryResults }) {
  const [subQScore, setSubQScore] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 });

  function updateScore(key, value) {
    setSubQScore((prev) => (
      {...prev, [key]: value}
    ))
  }
  console.log('subQ Score is ', subQScore);

  function handleClick(e) {
    e.preventDefault();
    toggleModal(false);
    setTemporaryResults('SERVE: GLUC AND INS MISMATCH; SYMPTOMS OF HYPERGLYCEMIA - REDO LABS FASTED');
  }

  return (
    <div className="screen-overlay">
      <div className="modal-question">
        <h3>Follow Up Question:</h3>
        <div className="all-subQs">
          {followUp.questions.map((subQ, i) => (<Question question={subQ} updateSubQScore={updateScore} row={i} key={i}/>))}
        </div>
        <button type="submit" onClick={handleClick}>Submit</button>
      </div>
    </div>
  )
}