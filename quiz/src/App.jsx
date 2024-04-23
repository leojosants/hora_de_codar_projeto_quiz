import { useContext } from 'react';
import { QuizContext } from './context/quizContext.jsx';
import WelcomeComponent from './components/WelcomeComponent/WelcomeComponent.jsx';
import PickCategoryComponent from './components/PickCategoryComponent/PickCategoryComponent.jsx';
import QuestionComponent from './components/QuestionComponent/QuestionComponent.jsx';
import GameOverComponent from './components/GameOverComponent/GameOverComponent.jsx';
import './App.css';

function App() {
  const [
    quizState, dispatch
  ] = useContext(QuizContext);

  return (
    <div className="class-app">
      <h1>
        Quiz de Programação
      </h1>

      {
        quizState.gameStage === 'Start' && <WelcomeComponent />
      }

      {
        quizState.gameStage === 'Category' && <PickCategoryComponent />
      }

      {
        quizState.gameStage === 'Playing' && <QuestionComponent />
      }

      {
        quizState.gameStage === 'End' && <GameOverComponent />
      }
    </div>
  );
}

export default App;