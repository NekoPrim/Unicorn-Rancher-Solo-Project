import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { Link } from 'react-router-dom';

import './Answer.css';

const AnswerTwo = () => {

    // setup dispatch and history
    const dispatch = useDispatch();
    const [selected, setSelected] = useState('');

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

        // setup data to send
        const userResponse = {
            ...selected,
            question_image: myPic
        }

        // send datat to user saga
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

    return(
        <div>
            {/* loop through answers */}
            {store.answer.map((content, id) =>  {
                return (
                    <div 
                        className="aContent" 
                        onClick={() => setSelected(content)} 
                        key={id}
                    >
                        {/* // make this its own component */}
                        {selected.content === content.content
                            ?
                            <h5 className="cont2">
                                {content.content}
                            </h5>
                            :
                            <h5 className="cont">
                                {content.content}
                            </h5>}
                    </div>
                )
            })}
            {/* navigate to response of selected answer */}
            <Link to="/responseTwo">
                <button 
                    className="btn aBtn" 
                    onClick={handleAnswer}
                    disabled={!selected}
                >
                    Next Question
                </button>
            </Link>
        </div>
    );
}

export default AnswerTwo;