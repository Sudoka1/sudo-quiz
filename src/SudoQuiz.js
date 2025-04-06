import React, { useState } from "react";
import quizContent from "./quizContent"; // Импортируем данные с вопросами

function SudoQuiz({ language, texts }) {
  const quizData = quizContent[language];

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[index] = value;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      <h2>{texts.header}</h2>
      {quizData.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          <ul>
            {question.options.map((option, idx) => (
              <li key={idx}>
                <label>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={selectedAnswers[index] === option}
                    onChange={() => handleAnswerChange(index, option)}
                    disabled={isSubmitted}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          {isSubmitted && selectedAnswers[index] !== null && (
            <div>
              {selectedAnswers[index] === question.answer ? (
                <span className="correct-answer">{texts.correct}</span>
              ) : (
                <span className="incorrect-answer">
                  {texts.incorrect} {question.answer}
                </span>
              )}
            </div>
          )}
        </div>
      ))}

      {!isSubmitted && (
        <button onClick={handleSubmit}>{texts.button}</button>
      )}

      {isSubmitted && (
        <div>
          <h2>{texts.result}</h2>
          <p>
            {texts.correct}:{" "}
            {selectedAnswers.filter(
              (answer, index) => answer === quizData[index].answer
            ).length}{" "}
            / {quizData.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default SudoQuiz;
