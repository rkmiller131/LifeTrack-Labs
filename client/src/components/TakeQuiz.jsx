import React, { useContext } from 'react';
import { ChangeViewContext } from '../App.jsx';

import '../css/takeQuiz.css';

import QuestionList from './QuestionList.jsx';

export default function TakeQuiz({ allQuestions }) {
  const changeView = useContext(ChangeViewContext);

  return (
    <div className="whole-page">
      <div className="go-back-bar">
        <button onClick={(e) => changeView(e, 0)}>Home</button>
      </div>
      <div className="quiz-container">
        <h1>Title for Quiz, Something good</h1>
        <p>Answer the following questions on a scale from 0(no/least/never) to 3(yes/most/frequently). Take your time and be honest with the answers; the more accurate you are, the better you will understand which systems are a priority for you.</p>
        {allQuestions.map((question) => (<QuestionList id={question.id} questions={question.questions} ratings={question.ratings} key={question.id}/>))}
      </div>
    </div>
  )
}