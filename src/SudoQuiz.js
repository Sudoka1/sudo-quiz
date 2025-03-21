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
  { question: "Wie viele Runden hat ein SUDO-Match?", options: ["1", "2", "3", "4"], answer: "3" },

  { question: "Wie heißt das Outfit des SUDO-Kämpfers?", options: ["Kimono", "Sudo Kleidung", "Gi", "Oda"], answer: "Oda" },

  { question: "Was bedeutet SUDO in der Übersetzung?", 
    options: ["Ein Kampfstil, der auf harten Schlägen und statischen Positionen basiert", "Kampf ähnlich den Eigenschaften des Wassers", "Eine alte Kampfkunstphilosophie, die im antiken Griechenland entstanden ist"], 
    answer: "Kampf ähnlich den Eigenschaften des Wassers" },

  { question: "Gründer von SUDO?", options: ["Brus Lee", "Chuck Norris", "Sabir Suleyman", "Jigoro Kano"], answer: "Sabir Suleyman" },

  { question: "In welchem ​​Jahr wurde SUDO geboren?", options: ["1877", "1977", "2014", "2011"], answer: "2011" },

  { question: "In welchem ​​Land wurde SUDO geboren?", options: ["Aserbaidschan", "Deutschland", "Japan", "USA"], answer: "Aserbaidschan" },
  
  { question: "Wo befindet sich der Hauptsitz von SUDO?", options: ["Dubai", "Paderborn", "Baku", "New York"], answer: "Paderborn" },

  { question: "Wer ist Ehrenpräsident der World SUDO Federation?", options: ["Naruhito", "Barack Hussein Obama II", "Chuck Norris",], answer: "Chuck Norris" },

  { question: "Wer ist der Präsident der World SUDO Federation?", options: ["Sabir Suleyman", "Antonio Bagueras", "Grandmaster Rahim", "Gary Stve"], answer: "Sabir Suleyman" },

  { question: "Was ist die Grundphilosophie von SUDO?", options: ["Luft", "Stein", "Wasser", "Person"], answer: "Wasser" },

  { question: "Wie wird die Begrüßung bei SUDO sein?", options: ["Bonjour", "Sa", "Os", "Ossu"], answer: "Sa" },

  { question: "Wie heißt der Ort, an dem SUDO trainiert wird?", options: ["Sudo Raum", "Dodze", "Training Raum", "Ojag"], answer: "Ojag" },

  { question: "Listen Sie alle Runden im SUDO bei Wettkämpfen der Reihe nach auf.", options: ["Mix,Doyush-Doshek,Doyush,Doshek", "Doyush,Doshek,Mix", "Doshek,Doyush,Mix"], answer: "Doyush,Doshek,Mix" },

  { question: "Welche Kleidungsfarben gibt es für einen SUDO-Kämpfer?", options: ["Weiß,Blau", "Weiß,Blau,Rot", "Weiß,Rot", "Rot,Blau"], answer: "Rot,Blau" },

  { question: "Welche Sudo-Weltmeisterschaft fand 2024 in Paderborn (Deutschland) statt?", options: ["8", "12", "13", "14"], answer: "13" },

  { question: "In wie vielen Sprachen wurde das Buch „Genius SUDO“ im Jahr 2022 veröffentlicht?", options: ["1", "3", "5", "6"], answer: "6" },

  { question: "Welche Organisation vertritt SUDO offiziell weltweit?", options: ["World Sudo Federation", "World SUDO Center", "Paderborn Sudo Akademie", "Westfalen SUDO Association"], answer: "World Sudo Federation" },

  { question: "Wie unterscheidet sich SUDO von Karate, Judo und Taekwondo?", 
    options: ["Sudo ist vielseitiger als Karate, Judo und Taekwondo, da es Schläge, Tritte, Würfe und Bodenkampf kombiniert.", 
              "SUDO ist weniger vielseitig, weil es nur einfache Schläge enthält und keinen Bodenkampf erlaubt.", 
              "SUDO konzentriert sich ausschließlich auf Meditation und enthält keine Kampftechniken", 
              "Im Vergleich zu Taekwondo ist SUDO sehr eingeschränkt und erlaubt keine Tritte oder Würfe."], 
              answer: "Sudo ist vielseitiger als Karate, Judo und Taekwondo, da es Schläge, Tritte, Würfe und Bodenkampf kombiniert." },

  { question: "Warum wird SUDO als universelles Kampfsystem bezeichnet?",
    options: ["SUDO wird als universelles Kampfsystem bezeichnet, weil es Schlagtechniken, Tritte, Würfe und Bodenkampf in einem einzigen System vereint.", 
              "SUDO ist kein universelles System, weil es nur auf Atemtechniken und Meditation basiert.", 
              "SUDO ist auf Wettkämpfe nicht ausgelegt und dient nur der körperlichen Entspannung.", 
              "SUDO besteht ausschließlich aus langsamen Bewegungen und enthält keine echten Kampftechniken."], 
              answer: "SUDO wird als universelles Kampfsystem bezeichnet, weil es Schlagtechniken, Tritte, Würfe und Bodenkampf in einem einzigen System vereint." },

  { question: "In welcher Position beginnt ein Kampf in SUDO?", options: ["Dur", "Hazir", "Hazir-ol", "Atli"], answer: "Hazir-ol" },

  { question: "Welche Streiks sind in SUDO verboten (listen Sie die 3 wichtigsten auf)?", 
    options: ["Schläge mit der Faust ins Gesicht,Schläge auf den Hinterkopf,Schläge auf die Genitalien.", 
              "Schläge mit der Handfläche auf den Bauch,Leichte Schläge auf die Beine,Ohrfeigen auf die Wange.", 
              "Leichte Berührungen mit dem Fuß,Schläge auf die Schultern,Kniestoß gegen den Oberschenkel."], 
              answer: "Schläge mit der Faust ins Gesicht,Schläge auf den Hinterkopf,Schläge auf die Genitalien." },

  { question: "Welche Haltung gilt in SUDO als die effektivste im Kampf?", options: ["Otur", "Rahat-otur", "Rahat", "Hazir-ol"], answer: "Hazir-ol" },

  { question: "Welche Kombination ist in SUDO nicht effektiv?", options: ["Tritt zum Körper", "Dreimal mit der Faust auf die Schulter schlagen und dann rückwärts laufen", "Fußfeger", "Bodenkontrolle"], 
    answer: "Dreimal mit der Faust auf die Schulter schlagen und dann rückwärts laufen" },

  { question: "In welchem ​​Jahr wurde SUDO geboren?", options: ["1877", "1977", "2014", "2011"], answer: "2011" },

  { question: "In welchem ​​Jahr wurde SUDO geboren?", options: ["1877", "1977", "2014", "2011"], answer: "2011" },

  { question: "In welchem ​​Jahr wurde SUDO geboren?", options: ["1877", "1977", "2014", "2011"], answer: "2011" },

  { question: "In welchem ​​Jahr wurde SUDO geboren?", options: ["1877", "1977", "2014", "2011"], answer: "2011" },

  { question: "In welchem ​​Jahr wurde SUDO geboren?", options: ["1877", "1977", "2014", "2011"], answer: "2011" },

  { question: "In welchem ​​Jahr wurde SUDO geboren?", options: ["1877", "1977", "2014", "2011"], answer: "2011" },

  { question: "In welchem ​​Jahr wurde SUDO geboren?", options: ["1877", "1977", "2014", "2011"], answer: "2011" },
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
