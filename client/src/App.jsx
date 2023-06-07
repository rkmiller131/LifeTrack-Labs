import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import Home from './components/Home.jsx';
import TakeQuiz from './components/TakeQuiz.jsx';
import Confirmation from './components/Confirmation.jsx';
import SeeResults from './components/SeeResults.jsx';

export const ChangeViewContext = React.createContext();

export default function App() {
  const [currentView, setCurrentView] = useState(0);
  const [allQuestions, setAllQuestions] = useState({});
  const [quizResults, setQuizResults] = useState([]);
  const [quizRationale, setQuizRationale] = useState({});

  useEffect(() => {
    axios.get('/quiz')
      .then((results) => {
        setAllQuestions(results.data);
      })
      .catch((err) => console.log('error fetching quiz', err));
  }, []);

  function changeView(e, view) {
    e.preventDefault();
    setCurrentView(view);
  }

  function updateResults(form) {
    setQuizResults(form);
  }

  function saveRationale(response) {
    setQuizRationale(response);
  }

  return (
    <>
      <ChangeViewContext.Provider value={changeView}>
        <div>Insert Sticky Nav Ribbon Here</div>
        { currentView === 0 && <Home updateResults={updateResults} saveRationale={saveRationale}/> }
        { currentView === 1 && <TakeQuiz allQuestions={allQuestions} updateResults={updateResults} saveRationale={saveRationale}/> }
        { currentView === 2 && <Confirmation /> }
        { currentView === 3 && <SeeResults quizResults={quizResults} quizRationale={quizRationale}/> }
      </ChangeViewContext.Provider>
    </>
  );
}