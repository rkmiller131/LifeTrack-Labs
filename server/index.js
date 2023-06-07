require('dotenv').config();
const express = require('express');
const path = require('path');
const controllers = require('./controllers');

const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')))

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/quiz', controllers.getQuestions);
app.post('/quiz', controllers.submitQuiz);

app.get('/results', controllers.getResults);

const port = process.env.PORT;
app.listen(port, ()=> {
  console.log(`Listening on http://localhost:${port}`)
})