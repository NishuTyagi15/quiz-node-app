const quizData = [
    {
      id: 1,
      type: 'single',
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
      correctAnswer: 0
    },
    {
      id: 2,
      type: 'single',
      question: 'Which company developed JavaScript?',
      options: ['Netscape', 'Microsoft', 'Google'],
      correctAnswer: 0
    },
    {
      id: 3,
      type: 'image',
      question: 'Which logo represents React?',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      options: ['React', 'Vue', 'Angular'],
      correctAnswer: 0
    },
    {
      id: 4,
      type: 'multiple',
      question: 'Which of the following are JavaScript frameworks/libraries?',
      options: ['React', 'Laravel', 'Vue', 'Django'],
      correctAnswers: [0, 2]
    },
    {
      id: 5,
      type: 'truefalse',
      question: 'JavaScript is a statically typed language.',
      options: ['True', 'False'],
      correctAnswer: 1
    }
  ];
  
  module.exports = quizData;
  