import React, { useContext, useState } from 'react';
import { ChangeViewContext } from '../App.jsx';

import '../css/takeQuiz.css';

import QuestionList from './QuestionList.jsx';

// allQuestions is [ {id: 1, questions: [(sub questions)], ratings:[(never, sometimes, etc)]}, {...} ]}
export default function TakeQuiz({ allQuestions }) {
  const changeView = useContext(ChangeViewContext);
  // this is what will eventually be sent back to the server
  const [runningTotals, setRunningTotals] = useState({
    provide: {
      score: 0,
      level: ''
    },
    protect: {
      score: 0,
      level: ''
    },
    high: [],
    watch: []
  });

  function updateTotals(key, key2, newFactor) {

    // if no key2 provided, we are pushing into either high or watch array
    if (!key2) {
      // make sure we don't duplicate the same question
      const duplicate = {
        isDupe: false,
        index: 0
      }
      for (let i = 0; i < runningTotals[key].length; i++) {
        const currentQuestion = runningTotals[key][i].question_no;
        if (currentQuestion === newFactor[0].question_no) {
          // if we have a duplicate, just update it. Otherwise concat to our array
          duplicate.isDupe = true;
          duplicate.index = i;
        }
      }
      if (duplicate.isDupe) {
        setRunningTotals((prev) => (
          {...prev, [key]: runningTotals[key][duplicate.index] = [newFactor[0]]}
        ))
      } else {
        console.log('key', key);
        console.log('runningtotals[key]', runningTotals[key]);
        setRunningTotals((runningTotals) => (
          {...runningTotals, [key]: runningTotals[key].concat(newFactor)}
        ));
      }
    }
  }

  console.log('running totals are ', runningTotals)

  return (
    <div className="whole-page">
      <div className="go-back-bar">
        <button onClick={(e) => changeView(e, 0)}>Home</button>
      </div>
      <div className="quiz-container">
        <h1>Title for Quiz, Something good</h1>
        <p>Answer the following questions on a scale from 0(no/least/never) to 3(yes/most/frequently). Take your time and be honest with the answers; the more accurate you are, the better you will understand which systems are a priority for you.</p>
        {allQuestions.map((question) => (<QuestionList id={question.id} questions={question.questions} ratings={question.ratings} updateTotals={updateTotals} key={question.id}/>))}
      </div>
    </div>
  )
}