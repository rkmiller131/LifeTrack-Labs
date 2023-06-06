import React, { useState, useContext } from 'react';
import axios from 'axios';

import Home from './components/Home.jsx';
import TakeQuiz from './components/TakeQuiz.jsx';

export const ChangeViewContext = React.createContext();

export default function App() {
  const [currentView, setCurrentView] = useState(0);

  function changeView(e, view) {
    e.preventDefault();
    setCurrentView(view);
  }

  return (
    <>
      <ChangeViewContext.Provider value={changeView}>
        <div>Insert Sticky Nav Ribbon Here</div>
        { currentView === 0 && <Home /> }
        { currentView === 1 && <TakeQuiz /> }
        { currentView === 2 && <Confirmation /> }
        { currentView === 3 && <SeeResults /> }
      </ChangeViewContext.Provider>
    </>
  );
}