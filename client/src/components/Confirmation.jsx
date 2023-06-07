import React, { useContext } from 'react';
import { ChangeViewContext } from '../App.jsx';

import '../css/confirmation.css';

export default function Confirmation() {
  const changeView = useContext(ChangeViewContext);

  function goHome() {
    window.location.reload(true);
  }

  return (
    <div className="whole-page-confirmation">
      <div className="confirmation-box">
        <h2>Your quiz has been submitted!</h2>
        <p>You can view your results now, or come back later. Use your email to retrieve or update your responses if something has changed or if you wish to add your labs.</p>
        <div className="confirmation-btn-container">
          <button className="home-btn" type="button" onClick={goHome}>Home</button>
          <button className="results-btn" type="button" onClick={(e) => changeView(e, 3)}>See Results</button>
        </div>
      </div>
    </div>
  )
}