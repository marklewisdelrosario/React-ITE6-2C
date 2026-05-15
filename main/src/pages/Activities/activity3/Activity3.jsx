import { useState, useEffect } from "react";
import "./Activity3.css";

const Activity3 = () => {
  const questions = [
    {
      question: "What is 2 + 2?",
      options: ["4", "2", "5"],
      answer: "4"
    },
    {
      question: "Capital of Philippines?",
      options: ["Cebu", "Manila", "Davao"],
      answer: "Manila"
    },
    {
      question: "What is 10 x 10?",
      options: ["200", "150", "100"],
      answer: "100"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (current >= questions.length) {
      setFinished(true);
    }
  }, [current]);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    setCurrent(next);
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="result-container">
        <h1 className="quiz-title">Quiz Finished!</h1>

        <h2 className="score">
          Score: {score} / {questions.length}
        </h2>

        {score === questions.length ? (
          <p className="perfect">Perfect!!!</p>
        ) : score > 1 ? (
          <p className="good">Good job!!!</p>
        ) : (
          <p className="bad">Try again!!!</p>
        )}

        <button className="quiz-btn" onClick={restartQuiz}>
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Quiz App</h1>

      <h2 className="quiz-question">
        {questions[current]?.question}
      </h2>

      {questions[current]?.options.map((opt, index) => (
        <button
          key={index}
          className="quiz-btn"
          onClick={() => handleAnswer(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default Activity3;