import './App.css';

import React, { useState } from "react";
import SudoQuiz from "./SudoQuiz"; // Импортируем компонент SudoQuiz


function App() {
  const [language, setLanguage] = useState("en"); // Начальный язык - английский

  const texts = {
    en: {
      header: "Welcome to the SUDO Quiz",
      button: "Check Answers",
      result: "Test Results",
      correct: "Correct Answer",
      incorrect: "Incorrect Answer. Correct Answer: ",
    },
    ru: {
      header: "Добро пожаловать в СУДО Викторину",
      button: "Проверить ответы",
      result: "Результаты теста",
      correct: "Правильный ответ",
      incorrect: "Неправильный ответ. Правильный ответ: ",
    },
    de: {
      header: "Willkommen beim SUDO Quiz",
      button: "Antworten überprüfen",
      result: "Testergebnisse",
      correct: "Richtige Antwort",
      incorrect: "Falsche Antwort. Richtige Antwort: ",
    },
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>{texts[language].header}</h1>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="language-select"
        >
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
      <SudoQuiz
        language={language}
        texts={texts[language]}
      />
    </div>
  );
}

export default App;
