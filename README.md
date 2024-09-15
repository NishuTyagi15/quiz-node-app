# Quiz Node App

A Node.js application providing a quiz with various question types, deployed on Render.

## Live Demo

[https://quiz-node-app.onrender.com](https://quiz-node-app.onrender.com)

## Features

- Retrieve 5 quiz questions (single choice, multiple choice, true/false, image-based)
- Submit answers and receive scores

## API Endpoints

### 1. Get Quiz Questions

- **Endpoint**: `/api/quiz`
- **Method**: `GET`
- **Description**: Retrieves 5 quiz questions of various types (single choice, multiple choice, true/false, image-based).
- **Response Example**:
  ```json
  {
    "success": true,
    "questions": [
      {
        "id": 1,
        "type": "single",
        "question": "What does HTML stand for?",
        "options": ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        "correctAnswer": 0
      },
      ...
    ]
  }
  
### 2. Submit Quiz Answers

- **Endpoint**: `/api/quiz/submit`
- **Method**: `POST`
- 
- Submit answers and get results
- **Description**: Submit answers and get results.
- **Request Body**:
- ```json
  {
  "answers": {
    "1": 0,
    "2": [0, 1],
    "3": 1,
    "4": 1,
    "5": 0
    }
  }
- **Response Example**:
  ```json
    "success": true,
  "score": 4,
  "results": [ "id": 1, "correct": true },
    { "id": 2, "correct": true },
    { "id": 3, "correct": true },
    { "id": 4, "correct": false },
    { "id": 5, "correct": true }
  ]}
