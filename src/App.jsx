import { useEffect, useState } from 'react';
import StartQuiz from './assets/components/start';
import './assets/css/app.css';
import Quiz from './assets/components/quiz';
import Result from './assets/components/result';

function App() {
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [mark, setMark] = useState(0);

  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch('/public/quiz.json')
      .then((response) => response.json())
      .then((data) => setQuiz(data));
  }, []);

  useEffect(() => {
    if (quiz.length > questionIndex) {
      setQuestion(quiz[questionIndex]);
    }
  }, [quiz, questionIndex]);

  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };

  const checkAnswer = (event, selected) => {
    if (!selectedAnswer) {
      setCorrectAnswer(question.answer);
      setSelectedAnswer(selected);
      setButtonDisabled(true);
    }

    if (selected === question.answer) {
      event.target.classList.add('bg-success');
      setMark(mark + 5);
    } else {
      event.target.classList.add('bg-danger');
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer('');
    setCorrectAnswer('');
    setButtonDisabled(false);
    const wrongBtn = document.querySelector('button.bg-danger');
    wrongBtn?.classList.remove('bg-danger');
    const rightBtn = document.querySelector('button.bg-success');
    rightBtn?.classList.remove('bg-success');
    setQuestionIndex(questionIndex + 1);
  };

  const showingResult = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  };

  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setButtonDisabled(false);
    setCorrectAnswer('');
    setSelectedAnswer('');
    setQuestionIndex(0);
    setMark(0);
    const wrongBtn = document.querySelector('button.bg-danger');
    wrongBtn?.classList.remove('bg-danger');
    const rightBtn = document.querySelector('button.bg-success');
    rightBtn?.classList.remove('bg-success');
  };

  return (
    <>
      <StartQuiz startQuiz={startQuiz} showStart={showStart} />
      <Quiz
        quiz={quiz}
        showQuiz={showQuiz}
        question={question}
        checkAnswer={checkAnswer}
        correctAnswer={correctAnswer}
        selectedAnswer={selectedAnswer}
        questionIndex={questionIndex}
        buttonDisabled={buttonDisabled}
        nextQuestion={nextQuestion}
        showingResult={showingResult}
      />
      <Result
        showResult={showResult}
        quiz={quiz}
        mark={mark}
        startOver={startOver}
      />
    </>
  );
}

export default App;
