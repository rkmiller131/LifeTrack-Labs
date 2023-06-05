require('dotenv').config();
const express = require('express');
const controllers = require('./controllers');

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/quiz', controllers.submitQuiz);

const port = process.env.PORT;
app.listen(port, ()=> {
  console.log(`Listening on http://localhost:${port}`)
})