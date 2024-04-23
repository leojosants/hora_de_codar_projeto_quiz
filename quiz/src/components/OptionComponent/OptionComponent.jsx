import { useContext } from 'react';
import { QuizContext } from '../../context/quizContext.jsx';
import './OptionComponent.css';

const OptionComponent = (props) => {
    const {
        option, selectOption, answer, hide
    } = props;

    const [quizState] = useContext(QuizContext);

    return (
        <div
            className={`
                class-option 
                ${quizState.answerSelected && option === answer ? 'class-correct' : ''} 
                ${quizState.answerSelected && option !== answer ? 'class-wrong' : ''}
                ${hide ? 'class-hide' : ''}
            `}
            onClick={() => selectOption()}
        >
            <p>
                {option}
            </p>
        </div>
    );
};

export default OptionComponent;