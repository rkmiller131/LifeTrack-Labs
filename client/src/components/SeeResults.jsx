import React, { useContext } from 'react';
import { ChangeViewContext } from '../App.jsx';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import '../css/results.css';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title
)

export default function SeeResults({ quizResults, quizRationale }) {
  const changeView = useContext(ChangeViewContext);

  const provide = [];
  const protect = [];

  quizResults.forEach((question) => {
    if (question.question_no <= 5) {
      provide.push(question.score)
    } else {
      protect.push(question.score)
    }
  })

  const data1 = {
    labels: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'],
    datasets: [
      {
        data: provide,
        backgroundColor: 'linear-gradient(#826AED, #0E1C36)',
        borderColor: '#826AED',
        borderWidth: 1,
      }
    ]
  };

  const data2 = {
    labels: ['Question 6', 'Question 7', 'Question 8'],
    datasets: [
      {
        data: protect,
        backgroundColor: 'linear-gradient(#826AED, #0E1C36)',
        borderColor: '#826AED',
        borderWidth: 1,
      }
    ]
  }

  const options1 = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 15
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Needs: Providing Cells With Nutrients'
      }
    }
  };

  const options2 = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 15
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Needs: Protecting Cells From Damage'
      }
    }
  };

  return(
    <div className="results">

      <div className="row">
        <div className="col-provide">
          <Bar options={options1} data={data1} />
        </div>
        <div className="col-protect">
          <Bar options={options2} data={data2} />
        </div>
      </div>

      <div className="row summary-labs">
        <div className="col-summary">
          <h3>Results Summary</h3>
          <div className="summary-text">
            {quizRationale.summary}
          </div>
        </div>
        <div className="col-labs">
          <h3>Recommended Labs</h3>
          <div className="labs-list-container">
            {quizRationale.labs.map((lab) => (<div className="lab">{lab}</div>))}
          </div>
        </div>
      </div>

      <div className="row">
        <h2>High Concern:</h2>
      </div>
        {quizRationale.high.map((score) => (
          <div className="row individual-score">
            <h4>{`Question ${score.question_no}`}</h4>
            <p>{score.rationale}</p>
          </div>
        ))}

      <div className="row">
        <h2>Be Mindful Of:</h2>
      </div>
        {quizRationale.watch.map((score) => (
          <div className="row individual-score">
            <h4>{`Question ${score.question_no}`}</h4>
            <p>{score.rationale}</p>
          </div>
        ))}
    </div>
  )
}