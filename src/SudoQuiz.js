import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const Card = ({ children }) => (
  <div className="card-container">{children}</div>
);

const CardContent = ({ children }) => <div className="text-center">{children}</div>;

const Button = ({ children, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="button"
    onClick={onClick}
  >
    {children}
  </motion.button>
);

const questions = [
  { question: "Сколько раундов в поединке по SUDO?", options: ["1", "2", "3", "4"], answer: "3" },
  { question: "Как называется одежда бойца SUDO?", options: ["Кимоно", "Ода", "Ги"], answer: "Ода" },
  { question: "Где штаб-квартира SUDO?", options: ["Баку", "Падерборн", "Москва"], answer: "Падерборн" },
  { question: "Основатель SUDO?", options: ["Брюс Ли", "Сабир Сулейман", "Грандмастер Рахим"], answer: "Сабир Сулейман" },
];

export default function SudoQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) setScore(score + 1);
    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setShowResult(true);
  };

  return (
    <div className="quiz-container">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Card>
          <CardContent>
            {showResult ? (
              <div>
                <h2 className="result-text">Ваш результат: {score} из {questions.length}</h2>
                <Button onClick={() => { setCurrentQuestion(0); setScore(0); setShowResult(false); }}>
                  Пройти тест снова
                </Button>
              </div>
            ) : (
              <div>
                <h2 className="question-text">{questions[currentQuestion].question}</h2>
                <div className="options-container">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button key={index} onClick={() => handleAnswer(option)}>
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
