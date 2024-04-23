import { useContext } from 'react';
import { QuizContext } from '../../context/quizContext.jsx';
import Quiz from '../../images/quiz.svg';
import './WelcomeComponent.css';

const WelcomeComponent = () => {
    const [
        quizState, dispatch
    ] = useContext(QuizContext);

    return (
        <div id='id-welcome'>
            <h2>
                Seja bem-vindo(a)
            </h2>
            
            <p>
                Clique no botão abaixo para começar
            </p>

            <button onClick={() => dispatch({ type: 'CHANGE_STATE' })}>
                Iniciar
            </button>

            <img
                src={Quiz}
                alt='Imagem de início do QUiz'
            />
        </div>
    );
};

export default WelcomeComponent;