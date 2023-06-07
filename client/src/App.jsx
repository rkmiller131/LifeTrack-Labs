import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import Home from './components/Home.jsx';
import TakeQuiz from './components/TakeQuiz.jsx';

export const ChangeViewContext = React.createContext();

export default function App() {
  const [currentView, setCurrentView] = useState(0);
  const [allQuestions, setAllQuestions] = useState({});
  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    axios.get('/quiz')
      .then((results) => {
        console.log(results.data);
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
  console.log('quiz results are ', quizResults);

  return (
    <>
      <ChangeViewContext.Provider value={changeView}>
        <div>Insert Sticky Nav Ribbon Here</div>
        { currentView === 0 && <Home /> }
        { currentView === 1 && <TakeQuiz allQuestions={allQuestions} updateResults={updateResults}/> }
        { currentView === 2 && <Confirmation /> }
        { currentView === 3 && <SeeResults /> }
      </ChangeViewContext.Provider>
    </>
  );
}