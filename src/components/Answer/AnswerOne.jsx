import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';

const AnswerOne = () => {

    // setup dispatch and history
    const dispatch = useDispatch();
    const history = useHistory();

    // access global variables
    const store = useReduxStore();

    const handleSelected = (content) => {
        dispatch({
            type: 'SET_SELECTED',
            payload: content
        });
        dispatch({
            type: "USER_ANSWER",
            payload: content.id
        })
    }

    return(
        <div>
            {store.answer.map((content, id) => (
                <div key={id}>
                    <h4 onClick={() => handleSelected(content)}>{content.content}</h4>
                </div>
            ))}
        </div>
    );
}

export default AnswerOne;