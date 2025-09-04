import { useEffect, useState } from 'react';
import StartQuiz from './assets/components/start';
import './assets/css/app.css';
import Quiz from './assets/components/quiz';

function App() {
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);

  // handle the quiz page
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);

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

  return (
    <>
      <StartQuiz startQuiz={startQuiz} showStart={showStart} />
      <Quiz quiz={quiz} showQuiz={showQuiz} question={question} />
    </>
  );
}

export default App;
