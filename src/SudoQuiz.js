import React, { useState } from "react";
const Card = ({ children }) => <div className="border p-4">{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;
const Button = ({ children, onClick }) => (
  <button className="p-2 bg-blue-500 text-white" onClick={onClick}>
    {children}
  </button>
);


// Вопросы теста
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
    <Card className="max-w-xl mx-auto p-5 text-center">
      <CardContent>
        {showResult ? (
          <div>
            <h2>Ваш результат: {score} из {questions.length}</h2>
            <Button onClick={() => { setCurrentQuestion(0); setScore(0); setShowResult(false); }}>Пройти тест снова</Button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold">{questions[currentQuestion].question}</h2>
            <div className="mt-4 space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <Button key={index} className="w-full" onClick={() => handleAnswer(option)}>{option}</Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
