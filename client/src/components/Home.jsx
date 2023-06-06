import React, { useContext } from 'react';
import { ChangeViewContext } from '../App.jsx';
import '../css/hero.css';

export default function Home() {
  const changeView = useContext(ChangeViewContext)
  return (
    <div className="whole-page">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content">
            <div className="hero-heading">
              <h1>Some catchy hero header for you</h1>
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

    </div>
  )
}