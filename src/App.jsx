import { useState } from 'react';
import StartQuiz from './assets/components/start';
import './assets/css/app.css';

function App() {
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);

  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };

  return (
    <>
      <StartQuiz startQuiz={startQuiz} showStart={showStart} />
    </>
  );
}

export default App;
