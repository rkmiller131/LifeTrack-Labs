import React, { useContext } from 'react';
import { ChangeViewContext } from '../App.jsx';

import Question1 from './Question1.jsx';

export default function TakeQuiz() {
  const changeView = useContext(ChangeViewContext);
  return (
    <div className="whole-page">
      <div className="go-back-bar">
        <button onClick={(e) => changeView(e, 0)}>Home</button>
      </div>
      <div className="quiz-container">
        <h1>Title for Quiz, Something good</h1>
        <p>Answer the following questions on a scale from 0 to 3. Take your time and be honest with the answers; the more accurate you are, the better you will understand which systems are a priority for you.</p>
        <Question1 />
      </div>
    </div>
  )
}