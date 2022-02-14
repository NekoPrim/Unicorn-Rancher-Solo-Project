import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { Link } from 'react-router-dom';

import './Answer.css';

const AnswerOne = () => {

    // setup dispatch and 
    const dispatch = useDispatch();
    const [selected, setSelected] = useState('');

    // grab global variable
    const store = useReduxStore();
    console.log('selected', store.selected);
    console.log('question', store.question);
    // const answerId = store.selected.id;
    const questionImage = store.question;

    // onClick POST selected data to database
    // onClick store selected answer in reducer
    const handleAnswer = () => {
        let answerId = selected.id
        let myPic;
        // loop throu store.question to get question_image
        for (let pic of questionImage) {
            myPic = pic.question_image
        }
        console.log('my pic', myPic);

        const userResponse = {
            ...selected,
            question_image: myPic
        }

        dispatch({
            type: 'CREATE_USER_ANSWER',
            payload: answerId
        });
        // send data to selected reducer
        dispatch({
            type: 'SET_SELECTED',
            payload: userResponse
        });
    }

    // render answers from question one to the DOM
    return(
        <div>
            {store.answer.map((content, id) => (
                <div className="aContent" key={id}>
                    <h6 onClick={() => setSelected(content)}>
                        {content.content}
                    </h6>
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