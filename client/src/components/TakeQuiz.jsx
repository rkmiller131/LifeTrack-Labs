import React, { useContext, useState } from 'react';
import { ChangeViewContext } from '../App.jsx';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';

import '../css/takeQuiz.css';

import QuestionList from './QuestionList.jsx';

// allQuestions is [ {id: 1, questions: [(sub questions)], ratings:[(never, sometimes, etc)]}, {...} ]}
export default function TakeQuiz({ allQuestions, updateResults, saveRationale }) {
  const changeView = useContext(ChangeViewContext);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const [questionsMaster, setQuestionsMaster] = useState({
    1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}
  });

  function updateMaster(question, newValue) {
    setQuestionsMaster((prev) => (
      {...prev, [question]: newValue}
    ))
  }

  function submitForm(e) {
    e.preventDefault();

    if(!email) {
      setErrMsg('An email is required to save your results');
    } else {
      setErrMsg('');
      setLoading(true);
      // this result array stays on the front end just for visualization as a graph
      const results = Array.from(Object.values(questionsMaster));
      updateResults(results);

      // once the form button is submitted, we need to organize data from our master into a form the back end will like
      const runningTotals = {
        provide: {
          score: 0,
          level: 'acceptable'
        },
        protect: {
          score: 0,
          level: 'acceptable'
        },
        high: [],
        watch: [],
        results: results,
        email: email
      }
      for (var question in questionsMaster) {
        const currentValue = questionsMaster[question];
        if (question > 0 && question < 6) {
          runningTotals.provide.score += currentValue.score;
        }
        if (question > 5) {
          runningTotals.protect.score += currentValue.score;
        }
        if (currentValue.score > 10) {
          runningTotals.high.push(currentValue)
        }
        if (currentValue.score > 5 && currentValue.score < 11) {
          runningTotals.watch.push(currentValue);
        }
      }
      // check what level protect and provide are at based on their total
      if (runningTotals.provide.score >= 45) {
        runningTotals.provide.level = 'high';
      }
      if (runningTotals.protect.score >= 27) {
        runningTotals.protect.level = 'high';
      }

      axios.post('/quiz', runningTotals)
        .then((res) => {
          setLoading(false);
          console.log(res.data);
          saveRationale(res.data);
          changeView(e, 2);
        })
        .catch((err) => console.log('ERROR saving quiz ', err));
    }
  }

  function goHome() {
    window.location.reload(true);
  }

  return (
    <div className="whole-page">
      <div className="go-back-bar">
        <button onClick={goHome}>Home</button>
      </div>
      <form className="quiz-container" onSubmit={submitForm}>
        <h1>Title for Quiz, Something good</h1>
        <p>Answer the following questions on a scale from 0(no/least/never) to 3(yes/most/frequently). Take your time and be honest with the answers; the more accurate you are, the better you will understand which systems are a priority for you.</p>
        {allQuestions.map((question) => (<QuestionList id={question.id} questions={question.questions} ratings={question.ratings} updateMaster={updateMaster} key={question.id}/>))}
        <div className="submission-btn">
          <h3>Email: </h3><input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <button type="submit">Submit Quiz</button>
          <div className="spinner">
            <ClipLoader
              color="#826AED"
              loading={loading}
              size={30}
            />
          </div>
        </div>
        {errMsg && <div className="error-msg">{errMsg}</div>}
      </form>
    </div>
  )
}