import { useEffect, useState } from 'react';
import StartQuiz from './assets/components/start';
import QuizPage from './assets/components/quiz';
import Result from './assets/components/result';

function App() {
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [mark, setMark] = useState(0);

  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch('/quiz.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('network error');
        }
        return response.json();
      })
      .then((data) => setQuiz(data))
      .catch((error) => console.log(error.message));
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

    const correctBtn = document.querySelector('button.bg-success');
    correctBtn?.classList.remove('bg-success');

    setQuestionIndex(questionIndex + 1);
  };

  const showingResult = () => {
    setShowResult(true);
    setShowQuiz(false);
    setShowStart(false);
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

    const correctBtn = document.querySelector('button.bg-success');
    correctBtn?.classList.remove('bg-success');
  };

  return (
    <>
      <StartQuiz startQuiz={startQuiz} showStart={showStart} />
      <QuizPage
        quiz={quiz}
        showQuiz={showQuiz}
        question={question}
        questionIndex={questionIndex}
        checkAnswer={checkAnswer}
        buttonDisabled={buttonDisabled}
        correctAnswer={correctAnswer}
        nextQuestion={nextQuestion}
        selectedAnswer={selectedAnswer}
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
