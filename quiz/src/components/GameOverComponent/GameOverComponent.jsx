import { useContext } from 'react';
import { QuizContext } from '../../context/quizContext.jsx';
import WellDone from '../../images/welldone.svg';
import './GameOverComponent.css';

const GameOverComponent = () => {
    const [
        quizState, dispatch
    ] = useContext(QuizContext);

    return (
        <div id='id-gameover'>
            <h2>
                Fim de Jogo!
            </h2>

            <p>
                Pontuação: {quizState.score}
            </p>

            <p>
                Você acertou {quizState.score} de {quizState.questions.length} perguntas.
            </p>

            <img
                src={WellDone}
                alt="Imagem de fim do Quiz"
            />

            <button onClick={() => dispatch({ type: 'NEW_GAME' })}>
                Reiniciar
            </button>
        </div>
    );
};

export default GameOverComponent;