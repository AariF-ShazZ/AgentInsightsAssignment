import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import questions from '../questions.json';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
  
    const handleAnswerSubmit = (selectedAnswer) => {
      const isCorrect = selectedAnswer === questions.questions[currentQuestion].answer;
      setUserAnswers([...userAnswers, { question: questions.questions[currentQuestion].question, answer: selectedAnswer, isCorrect }]);
      if (isCorrect) {
        setScore(score + 1);
      }
      if (currentQuestion < questions.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    };
  
    const handlePrevQuestion = () => {
      if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
      }
    };
  
    const handleNextQuestion = () => {
      if (currentQuestion < questions.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    };
  return (
    <div className="quiz-container">
      {currentQuestion < questions.questions.length ? (
        <Question
          question={questions.questions[currentQuestion].question}
          options={questions.questions[currentQuestion].options}
          handleAnswerSubmit={handleAnswerSubmit}
        />
      ) : (
        <Result score={score} totalQuestions={questions.questions.length} />
      )}
      <div className="nav-buttons">
        <button onClick={handlePrevQuestion} disabled={currentQuestion === 0}>Previous</button>
        {currentQuestion < questions.questions.length - 1 && <button onClick={handleNextQuestion}>Next</button>}
      </div>
    </div>
  );
};
export default Quiz;
