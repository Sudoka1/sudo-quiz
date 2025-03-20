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
 

  { question: "Was bedeutet SUDO in der Übersetzung?", 
    options: ["Ein Kampfstil, der auf harten Schlägen und statischen Positionen basiert", "Kampf ähnlich den Eigenschaften des Wassers", "Eine alte Kampfkunstphilosophie, die im antiken Griechenland entstanden ist"], 
    answer: "Kampf ähnlich den Eigenschaften des Wassers" },

  { question: "Gründer von SUDO?", options: ["Brus Lee", "Chuck Norris", "Sabir Suleyman", "Jigoro Kano"], answer: "Sabir Suleyman" },

  { question: "In welchem ​​Jahr wurde SUDO geboren?", options: ["1877", "1977", "2014", "2011"], answer: "2011" },

  { question: "In welchem ​​Land wurde SUDO geboren?", options: ["Aserbaidschan", "Deutschland", "Japan", "USA"], answer: "Aserbaidschan" },
  
  { question: "Wo befindet sich der Hauptsitz von SUDO?", options: ["Dubai", "Paderborn", "Baku", "New York"], answer: "Paderborn" },

  { question: "Wer ist Ehrenpräsident der World SUDO Federation?", options: ["Naruhito", "Barack Hussein Obama II", "Chuck Norris",], answer: "Chuck Norris" },

  { question: "Wer ist der Präsident der World SUDO Federation?", options: ["Sabir Suleyman", "Antonio Bagueras", "Grandmaster Rahim", "Gary Stve"], answer: "Sabir Suleyman" },
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
