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
  { question: "1.Wie viele Runden hat ein SUDO-Match?", options: ["1", "2", "3", "4"], answer: "3" },

  { question: "2.Wie heißt das Outfit des SUDO-Kämpfers?", options: ["Kimono", "Sudo Kleidung", "Gi", "Oda"], answer: "Oda" },

  { question: "3.Was bedeutet SUDO in der Übersetzung?", 
    options: ["Ein Kampfstil, der auf harten Schlägen und statischen Positionen basiert", "Kampf ähnlich den Eigenschaften des Wassers", "Eine alte Kampfkunstphilosophie, die im antiken Griechenland entstanden ist"], 
    answer: "Kampf ähnlich den Eigenschaften des Wassers" },

  { question: "4.Gründer von SUDO?", options: ["Brus Lee", "Chuck Norris", "Sabir Suleyman", "Jigoro Kano"], answer: "Sabir Suleyman" },

  { question: "5.In welchem ​​Jahr wurde SUDO geboren?", options: ["1877", "1977", "2014", "2011"], answer: "2011" },

  { question: "6.In welchem ​​Land wurde SUDO geboren?", options: ["Aserbaidschan", "Deutschland", "Japan", "USA"], answer: "Aserbaidschan" },
  
  { question: "7.Wo befindet sich der Hauptsitz von SUDO?", options: ["Dubai", "Paderborn", "Baku", "New York"], answer: "Paderborn" },

  { question: "8.Wer ist Ehrenpräsident der World SUDO Federation?", options: ["Naruhito", "Barack Hussein Obama II", "Chuck Norris",], answer: "Chuck Norris" },

  { question: "19.Wer ist der Präsident der World SUDO Federation?", options: ["Sabir Suleyman", "Antonio Bagueras", "Grandmaster Rahim", "Gary Stve"], answer: "Sabir Suleyman" },

  { question: "10.Was ist die Grundphilosophie von SUDO?", options: ["Luft", "Stein", "Wasser", "Person"], answer: "Wasser" },

  { question: "11.Wie wird die Begrüßung bei SUDO sein?", options: ["Bonjour", "Sa", "Os", "Ossu"], answer: "Sa" },

  { question: "12.Wie heißt der Ort, an dem SUDO trainiert wird?", options: ["Sudo Raum", "Dodze", "Training Raum", "Ojag"], answer: "Ojag" },

  { question: "13.Listen Sie alle Runden im SUDO bei Wettkämpfen der Reihe nach auf.", options: ["Mix,Doyush-Doshek,Doyush,Doshek", "Doyush,Doshek,Mix", "Doshek,Doyush,Mix"], answer: "Doyush,Doshek,Mix" },

  { question: "14.Welche Kleidungsfarben gibt es für einen SUDO-Kämpfer?", options: ["Weiß,Blau", "Weiß,Blau,Rot", "Weiß,Rot", "Rot,Blau"], answer: "Rot,Blau" },

  { question: "15.Welche Sudo-Weltmeisterschaft fand 2024 in Paderborn (Deutschland) statt?", options: ["8", "12", "13", "14"], answer: "13" },

  { question: "16.In wie vielen Sprachen wurde das Buch „Genius SUDO“ im Jahr 2022 veröffentlicht?", options: ["1", "3", "5", "6"], answer: "6" },

  { question: "17.Welche Organisation vertritt SUDO offiziell weltweit?", options: ["World Sudo Federation", "World SUDO Center", "Paderborn Sudo Akademie", "Westfalen SUDO Association"], answer: "World Sudo Federation" },

  { question: "18.Wie unterscheidet sich SUDO von Karate, Judo und Taekwondo?", 
    options: ["Sudo ist vielseitiger als Karate, Judo und Taekwondo, da es Schläge, Tritte, Würfe und Bodenkampf kombiniert.", 
              "SUDO ist weniger vielseitig, weil es nur einfache Schläge enthält und keinen Bodenkampf erlaubt.", 
              "SUDO konzentriert sich ausschließlich auf Meditation und enthält keine Kampftechniken", 
              "Im Vergleich zu Taekwondo ist SUDO sehr eingeschränkt und erlaubt keine Tritte oder Würfe."], 
              answer: "Sudo ist vielseitiger als Karate, Judo und Taekwondo, da es Schläge, Tritte, Würfe und Bodenkampf kombiniert." },

  { question: "19.Warum wird SUDO als universelles Kampfsystem bezeichnet?",
    options: ["SUDO wird als universelles Kampfsystem bezeichnet, weil es Schlagtechniken, Tritte, Würfe und Bodenkampf in einem einzigen System vereint.", 
              "SUDO ist kein universelles System, weil es nur auf Atemtechniken und Meditation basiert.", 
              "SUDO ist auf Wettkämpfe nicht ausgelegt und dient nur der körperlichen Entspannung.", 
              "SUDO besteht ausschließlich aus langsamen Bewegungen und enthält keine echten Kampftechniken."], 
              answer: "SUDO wird als universelles Kampfsystem bezeichnet, weil es Schlagtechniken, Tritte, Würfe und Bodenkampf in einem einzigen System vereint." },

  { question: "20.In welcher Position beginnt ein Kampf in SUDO?", options: ["Dur", "Hazir", "Hazir-ol", "Atli"], answer: "Hazir-ol" },

  { question: "21.Welche Streiks sind in SUDO verboten (listen Sie die 3 wichtigsten auf)?", 
    options: ["Schläge mit der Faust ins Gesicht,Schläge auf den Hinterkopf,Schläge auf die Genitalien.", 
              "Schläge mit der Handfläche auf den Bauch,Leichte Schläge auf die Beine,Ohrfeigen auf die Wange.", 
              "Leichte Berührungen mit dem Fuß,Schläge auf die Schultern,Kniestoß gegen den Oberschenkel."], 
              answer: "Schläge mit der Faust ins Gesicht,Schläge auf den Hinterkopf,Schläge auf die Genitalien." },

  { question: "22.Welche Haltung gilt in SUDO als die effektivste im Kampf?", options: ["Otur", "Rahat-otur", "Rahat", "Hazir-ol"], answer: "Hazir-ol" },

  { question: "23.Welche Kombination ist in SUDO nicht effektiv?", options: ["Tritt zum Körper", "Dreimal mit der Faust auf die Schulter schlagen und dann rückwärts laufen", "Fußfeger", "Bodenkontrolle"], 
    answer: "Dreimal mit der Faust auf die Schulter schlagen und dann rückwärts laufen" },

  { question: "24.Was bedeutet „Bodenarbeit“ in SUDO?", 
    options: ["dass man Liegestütze macht, um sich aufzuwärmen", "Bei der Bodenarbeit muss man den Gegner nur berühren, um zu gewinnen", 
    "ein Meditationsabschnitt ohne physischen Kontakt", "den zweiten Kampfabschnitt, in dem sich beide Kämpfer auf den Knien befinden und mit Griff-, Hebel- und Kontrolltechniken kämpfen"], 
    answer: "den zweiten Kampfabschnitt, in dem sich beide Kämpfer auf den Knien befinden und mit Griff-, Hebel- und Kontrolltechniken kämpfen" },

  { question: "25.Welche Aktion ist bei Würfen in SUDO verboten?", options: ["Es ist verboten, den Gegner mit geradem Rücken zu werfen", "Es ist verboten, den Gegner mit Absicht auf den Kopf zu werfen", 
    "Es ist verboten, während des Wurfs zu atmen", "Es ist verboten, einen Wurf mit einem Kampfschrei zu begleiten"], 
    answer: "Es ist verboten, den Gegner mit Absicht auf den Kopf zu werfen" },

  { question: "26.Welche Rolle spielt die Atmung während eines Kampfes im SUDO?", options: ["Atmung ist im SUDO nicht wichtig und wird ignoriert", "Man darf im Kampf nur durch den Mund atmen", 
    "Die Atmung hilft, Ruhe und Kontrolle im Kampf zu bewahren"], answer: "Die Atmung hilft, Ruhe und Kontrolle im Kampf zu bewahren" },

  { question: "27.Wie wird der Gewinner eines SUDO-Kampfes ermittelt?", options: ["Der Gewinner wird durch Punkte, Niederlage (Aufgabe) des Gegners oder technischen Sieg bestimmt", 
    "Der Kämpfer mit dem lautesten Kampfschrei gewinnt", " Der Kampf endet unentschieden, egal was passiert"], 
    answer: "Der Gewinner wird durch Punkte, Niederlage (Aufgabe) des Gegners oder technischen Sieg bestimmt" },

  { question: "28.Was bedeutet der Begriff „iki“ in SUDO?", options: ["bedeutet Bodenarbeit", "aufgeben", "Punkt", "ist ein Kampfschrei"], answer: "Punkt" },

  { question: "29.Welche Arten von Warnungen gibt es in SUDO?", options: ["1 (Kobud)", "2 (Kobud, Jaza)", "3 (Kobud, Jaza, Chikh)", "4 (Kobud, Jaza, Chikh, Galkh)"], answer: "3 (Kobud, Jaza, Chikh)" },

  { question: "30.Welche Geste des Richters weist auf eine Disqualifikation hin?", options: ["Kobud", "Jaza", "Chikh", "Galkh"], answer: "Chikh" },

  { question: "31.Welche Handlungen eines Kämpfers können zur sofortigen Disqualifikation führen?", options: ["Absichtlicher Schlag mit dem Faust auf den Kopf", 
    "Zu leiser Kampfschrei", "Schweiß auf der Matte", "Absichtlicher Schlag auf den Kopf"], answer: "Absichtlicher Schlag mit dem Faust auf den Kopf" },

  { question: "32.Welche Regeln nicht gelten für die Ausrüstung von Sportlern?", options: ["Das Tragen des Oda (rote oder blaue Jacke, weiße Hose) ist Pflicht", "Die Farbe der Socken muss zur Gürtelfarbe passen", "Kämpfer müssen barfuß kämpfen", "Handschuhe in der zweiten Runde ausgezogen"], answer: "Die Farbe der Socken muss zur Gürtelfarbe passen" },

  { question: "33.Wo fand die erste offizielle Sudo-Weltmeisterschaft statt?", options: ["Istanbull-2012", "Vagos-2012", "Baku-2012", "Paderborn-2012"], answer: "Baku-2012" },

  { question: "34.Welche Länder sind führend bei der Anzahl der SUDO-Grandchampions?", options: ["Lettland", "Guinea-Bissau", "Aserbaidschan", "Kanada", "Deutschland", "Senegal"], answer: "Lettland" },

  { question: "35.Was bedeutet der Ausdruck „Sei wie Wasser“ in der SUDO-Philosophie?", options: ["Wasser ist stärker als Feuer, deshalb vermeide Hitze", "Anpassungsfähig, fließend und stark – flexibel im Kampf", "Man darf nur bei Regen kämpfen"], answer: "Anpassungsfähig, fließend und stark – flexibel im Kampf" },

  { question: "36.Was bedeutet „Otur“ in SUDO?", options: ["Aufstehen", "Bereit zum Kampf sein", "Hinsetzen", "Kampfhaltung"], answer: "Hinsetzen" },

  { question: "37.Was ist die höchste Punktzahl für den Wettbewerb?", options: ["Uch", "Galaba", "Bir", "Iki"], answer: "Galaba" },

  { question: "38.Schüler-Lehrer-Ranking in SUDO", options: ["Bash Ustad, Namized, Ustad, Shagird, Muellim, Bash Muellim", "Namized, Ustad, Shagird, Muellim, Bash Muellim, Bash Ustad", "Namized, Shagird, Muellim, Bash Muellim, Ustad, Bash Ustad", "Shagird, Namized, Muellim, Bash Muellim, Ustad, Bash Ustad"], answer: "Shagird, Namized, Muellim, Bash Muellim, Ustad, Bash Ustad" },

  { question: "39.Im Jahr 2025 offiziell die größte SUDUschule der Welt.", options: ["WSA Paderborn", "Baku Sudo Academy", "SUDO GmbH", "SUDO India"], answer: "WSA Paderborn" },

  { question: "40.Das größte Ziel des SUDO", options: ["Die erfolgreiche Austragung der nächsten Weltmeisterschaft", "Teilnahme an den Olympischen Spielen", "Eröffnung eigenen Welt Zentrums", "Die Zahl der Studierenden am WSF Institut soll auf die Maximalzahl erhöht werden"], answer: "Teilnahme an den Olympischen Spielen" },
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
