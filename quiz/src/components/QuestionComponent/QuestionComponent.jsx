import { useContext } from 'react';
import { QuizContext } from '../../context/quizContext.jsx';
import OptionComponent from '../OptionComponent/OptionComponent.jsx';
import './QuestionComponent.css';

const QuestionComponent = () => {
    const [
        quizState, dispatch
    ] = useContext(QuizContext);

    const currentQuestion = quizState.questions[quizState.currentQuestion];
    const indiceCurrentQuestion = quizState.currentQuestion + 1;
    const questionsLength = quizState.questions.length;

    const onSelectOption = (option) => {
        dispatch(
            {
                type: 'CHECK_ANSWER',
                payload: {
                    answer: currentQuestion.answer,
                    option
                }
            }
        );
    };

    return (
        <div id='id-question'>
            <p>
                Pergunta {indiceCurrentQuestion} de {questionsLength}
            </p>

            <h2>
                {currentQuestion.question}
            </h2>

            <div id="id-options-container">
                {
                    currentQuestion.options.map(
                        (option) => (
                            <OptionComponent
                                option={option}
                                key={option}
                                answer={currentQuestion.answer}
                                selectOption={() => onSelectOption(option)}
                                hide={quizState.optionToHide === option ? 'class-hide' : null}
                            />
                        )
                    )
                }
            </div>

            {
                !quizState.answerSelected && !quizState.help && (
                    <>
                        {
                            currentQuestion.tip && (
                                <button onClick={() => dispatch({ type: 'SHOW_TIP' })}>
                                    Dica
                                </button>
                            )
                        }
                        <button onClick={() => dispatch({ type: 'REMOVE_OPTION' })}>
                            Excluir uma
                        </button>
                    </>
                )
            }

            {
                !quizState.answerSelected && quizState.help === 'tip' && (
                    <p>
                        {currentQuestion.tip}
                    </p>
                )
            }

            {
                quizState.answerSelected && (
                    <button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>
                        Continuar
                    </button>
                )
            }
        </div>
    );
};

export default QuestionComponent;