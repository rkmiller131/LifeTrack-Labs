import React, { useContext, useState } from 'react';
import axios from 'axios';
import { ChangeViewContext } from '../App.jsx';
import '../css/hero.css';

import ManualLabs from './ManualLabs.jsx';

export default function Home({ updateResults, saveRationale }) {
  const changeView = useContext(ChangeViewContext);
  const [toggleManualLabs, setToggleManualLabs] = useState(false);
  const [temporaryResults, setTemporaryResults] = useState('');
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  function getResults(e) {
    e.preventDefault();
    if (!email) {
      setErrorMsg('Email required');
    } else {
      setErrorMsg('');
      axios.get(`/results?email=${email}`)
        .then((results) => {
          updateResults(results.data.results);
          saveRationale(results.data.response);
          changeView(e, 3);
        })
        .catch((err) => {
          setErrorMsg('Email Not Found');
          console.log('ERROR retrieving results ', err);
        })
    }
  }

  function manualLabEntry(form) {
    axios.post('/labs', form)
      .then((results) => {
        setTemporaryResults(results.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="whole-page">

      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content">
            <div className="hero-heading">
              <h1>Start by finding your lab recommendations</h1>
            </div>
            <div className="hero-subtext">
              <p>Some smaller subtext under the header to get you to click button</p>
            </div>
            <div className="hero-action">
              <button onClick={(e) => {changeView(e, 1)}} className="quiz-button">Take quiz</button>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right-image">
            <img src="" alt="example result"/>
          </div>
        </div>
      </div>

      <div className="section-2">
        <div className="section-2-heading">
          <h2>Get better insight</h2>
        </div>
        <div className="section-2-row">
          <div className="section-2-left">
            <div className="left-content">
              <div className="left-text">
                <h4>Great! Labs are an excellent means of understanding more about your health-related symptoms.</h4>
              </div>
              <div className="left-button-container">
                <button type="button" className="upload-lab">Upload</button>
                <button type="button" className="manual-lab" onClick={(e) => {e.preventDefault(); setToggleManualLabs(true)}}>Enter Manually</button>
                {toggleManualLabs && <ManualLabs manualLabEntry={manualLabEntry}/>}
                {temporaryResults && <div>{temporaryResults}</div>}
              </div>
            </div>
          </div>
          <div className="section-2-right">
            <div className="right-content">
              <div className="right-text">
                <h4>Welcome back! Enter your email to retrieve your results.</h4>
              </div>
              <div className="right-input-container">
                <h5>Email: </h5> <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                <button className="retrieve-results-btn" onClick={getResults}>View Results</button>
                {errorMsg && <div className="error-msg">{errorMsg}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}