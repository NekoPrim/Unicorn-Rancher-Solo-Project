import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { Link } from 'react-router-dom';

import './Answer.css';

const AnswerTwo = () => {

    // setup dispatch and history
    const dispatch = useDispatch();

    // grab global variable
    const store = useReduxStore();
    console.log('selected', store.selected);
    console.log('question', store.question);
    const answerId = store.selected.id;
    const questionImage = store.question;

    // onClick capture data
    const handleSelected = (content) => {
        let myPic;
        // loop throu store.question to get question_image
        for (let pic of questionImage) {
            myPic = pic.question_image
        }
        console.log('my pic', myPic);

        const userResponse = {
            ...content,
            question_image: myPic
        }

        // send data to selected reducer
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

    return(
        <div>
            {store.answer.map((content, id) => (
                <div className="aContent" key={id}>
                    <h6 onClick={() => handleSelected(content)}>
                        {content.content}
                    </h6>
                </div>
            ))}
            {/* navigate to response of selected answer */}
            <Link to="/responseTwo">
                <button className="btn aBtn" onClick={handleAnswer}>
                    Next Question
                </button>
            </Link>
        </div>
    );
}

export default AnswerTwo;