const express = require('express');
const bodyParser = require('body-parser');
const quizData = require('./data/QuizData');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/api/quiz', (req, res) => {
  res.json({
    success: true,
    questions: quizData.slice(0, 5),
  });
});

app.post('/api/quiz/submit', (req, res) => {
  const userAnswers = req.body.answers;

  let score = 0;
  const results = quizData.map((question) => {
    const userAnswer = userAnswers[question.id];

    if (question.type === 'single' || question.type === 'truefalse') {
      const isCorrect = userAnswer === question.correctAnswer;
      if (isCorrect) score++;
      return { id: question.id, correct: isCorrect };
    }

    if (question.type === 'multiple') {
      const isCorrect = JSON.stringify(userAnswer.sort()) === JSON.stringify(question.correctAnswers.sort());
      if (isCorrect) score++;
      return { id: question.id, correct: isCorrect };
    }

    return { id: question.id, correct: false };
  });

  res.json({
    success: true,
    score,
    results
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
