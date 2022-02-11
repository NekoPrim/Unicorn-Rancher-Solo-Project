import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { Link } from 'react-router-dom';


const AnswerOne = () => {

    // setup dispatch and history
    const dispatch = useDispatch();
    // const history = useHistory();

    // grab global variable
    const store = useReduxStore();
    console.log('selected', store.selected);
    const answerId = store.selected.id;

    // onClick capture selected answer
    const handleSelected = (content) => {
        dispatch({
            type: 'SET_SELECTED',
            payload: content
        });
    }

    // onClick POST selected data to database
    const handleAnswer = () => {
        dispatch({
            type: 'CREATE_USER_ANSWER',
            payload: answerId
        });
    }

    // render answers from question one to the DOM
    return(
        <div>
            {store.answer.map((content, id) => (
                <div key={id}>
                    <h4 onClick={() => handleSelected(content)}>
                        {content.content}
                    </h4>
                </div>
            ))}
            {/* navigate to response of selected answer */}
            <Link to="/responseOne">
                <button className="btn" onClick={handleAnswer}>
                    Response
                </button>
            </Link>
        </div>
    );
}

export default AnswerOne;