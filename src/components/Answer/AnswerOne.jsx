import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { Link } from 'react-router-dom';

import './Answer.css';

const AnswerOne = () => {

    // setup dispatch and history
    const dispatch = useDispatch();
    // const history = useHistory();

    // grab global variable
    const store = useReduxStore();
    console.log('selected', store.selected);
    console.log('question', store.question);
    const answerId = store.selected.id;
    const questionImage = store.question;

    // onClick capture selected answer
    const handleSelected = (content) => {
        let myPic;
        //
        for (let pic of questionImage) {
            myPic = pic.question_image
        }
        console.log('my pic', myPic);

        const userResponse = {
            ...content,
            question_image: myPic
        }
        dispatch({
            type: 'SET_SELECTED',
            payload: userResponse
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
                <div className="aContent" key={id}>
                    <h4 onClick={() => handleSelected(content)}>
                        {content.content}
                    </h4>
                </div>
            ))}
            {/* navigate to response of selected answer */}
            <Link to="/responseOne">
                <button className="btn aBtn" onClick={handleAnswer}>
                    Response
                </button>
            </Link>
        </div>
    );
}

export default AnswerOne;