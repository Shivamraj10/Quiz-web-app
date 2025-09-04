import { useEffect, useState } from "react";
import StartQuiz from "./assets/components/StartQuiz";
import QuizPage from "./assets/components/QuizPage";
import Result from "./assets/components/Result";

function App() {
  const [quiz, setQuiz] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]); // track user answers
  const [mark, setMark] = useState(0);

  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Fetch quiz questions
  useEffect(() => {
    fetch("/quiz.json")
      .then((res) => res.json())
      .then((data) => setQuiz(data))
      .catch((err) => console.error(err));
  }, []);

  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };

  const checkAnswer = (selected) => {
    const currentQ = quiz[questionIndex];
    const isCorrect = selected === currentQ.answer;

    // prevent duplicate answers (if going back/forward)
    const existing = answers.find((a) => a.index === questionIndex);
    if (existing) return;

    setAnswers((prev) => [
      ...prev,
      {
        index: questionIndex,
        question: currentQ.question,
        selected,
        correct: currentQ.answer,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setMark((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (questionIndex < quiz.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prev) => prev - 1);
    }
  };

  const skipQuestion = () => {
    if (questionIndex < quiz.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      showingResult();
    }
  };

  const showingResult = () => {
    setShowResult(true);
    setShowQuiz(false);
  };

  const startOver = () => {
    setShowStart(true);
    setShowQuiz(false);
    setShowResult(false);
    setQuestionIndex(0);
    setAnswers([]);
    setMark(0);
  };

  return (
    <>
      <StartQuiz startQuiz={startQuiz} showStart={showStart} />

      <QuizPage
        quiz={quiz}
        showQuiz={showQuiz}
        question={quiz[questionIndex]}
        questionIndex={questionIndex}
        totalQuestions={quiz.length}
        checkAnswer={checkAnswer}
        nextQuestion={nextQuestion}
        prevQuestion={prevQuestion}
        skipQuestion={skipQuestion}
        answers={answers}
        showingResult={showingResult}
      />

      <Result
        showResult={showResult}
        quiz={quiz}
        mark={mark}
        answers={answers}
        startOver={startOver}
      />
    </>
  );
}

export default App;
