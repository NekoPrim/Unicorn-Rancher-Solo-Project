import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { Link } from 'react-router-dom';


const AnswerThree = () => {

    // setup dispatch and history
    const dispatch = useDispatch();
    // const history = useHistory();

    // grab global variable
    const store = useReduxStore();
    console.log('selected', store.selected);
    const answerId = store.selected.id;

    // onClick capture data
    const handleSelected = (content) => {
        dispatch({
            type: 'SET_SELECTED',
            payload: content
        });
    }

    // onClick send data to database
    const handleAnswer = () => {
        dispatch({
            type: 'CREATE_USER_ANSWER',
            payload: answerId
        });
        // history.push('/questionTwo');
    }

    return(
        <div>
            {store.answer.map((content, id) => (
                <div key={id}>
                    <h4 onClick={() => handleSelected(content)}>
                        {content.content}
                    </h4>
                </div>
            ))}
            <Link to="/responseThree">
                <button onClick={handleAnswer}>
                    Next Question
                </button>
            </Link>
        </div>
    );
}

export default AnswerThree;