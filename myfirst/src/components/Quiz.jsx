import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import questions from '../questions.json';
// import './Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  console.log(questions);
  const handleAnswer = (selectedAnswer) => {
    setUserAnswers([...userAnswers, selectedAnswer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions.questions[index].answer) {
        score++;
      }
    });
    return score;
  };

  if (currentQuestion < questions.questions.length) {
    return (
      <div className="quiz-container">
        <Question
          question={questions.questions[currentQuestion].question}
          options={questions.questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      </div>
    );
  } else {
    const score = calculateScore();
    return (
      <div className="quiz-container">
        <Result score={score} totalQuestions={questions.questions.length} />
      </div>
    );
  }
};

export default Quiz;
