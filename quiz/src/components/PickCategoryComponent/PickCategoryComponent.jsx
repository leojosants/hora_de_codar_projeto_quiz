import { useContext } from 'react';
import { QuizContext } from '../../context/quizContext.jsx';
import Category from '../../images/category.svg';
import './PickCategoryComponent.css';

const PickCategoryComponent = () => {
    const [
        quizState, dispatch
    ] = useContext(QuizContext);

    const chooseCategoryAndReorderQuestions = (category) => {
        dispatch(
            {
                type: 'START_GAME',
                payload: category
            }
        );

        dispatch(
            {
                type: 'REORDER_QUESTIONS'
            }
        );
    };

    return (
        <div id='id-category'>
            <h2>
                Escolha uma categoria
            </h2>

            <p>
                As perguntas serão referentes a uma das linguagens abaixo:
            </p>

            <div>
                {
                    quizState.questions.map(
                        (question) => (
                            <button
                                key={question.category}
                                onClick={() => chooseCategoryAndReorderQuestions(question.category)}
                            >
                                {question.category}
                            </button>
                        )
                    )
                }
            </div>

            <img
                src={Category}
                alt='Imagem de categorias do Quiz'
            />
        </div>
    );
};

export default PickCategoryComponent;