import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

import AnswerOne from '../Answer/AnswerOne';

const QuestionOne = () => {

    // generate random number
    const randomNumberGenerator = (min, max) => {
        return Math.floor(Math.random() *  (1 + max - min) + min);
    }

    // setup dispatch
    const dispatch = useDispatch();

    // access global variables
    const store = useReduxStore();


    useEffect(() => {
        const random = randomNumberGenerator(1, 10);
        console.log('random', random);

        dispatch({ 
            type: 'FETCH_QUESTION',
            payload: random
        });
        dispatch({
            type: 'FETCH_ANSWER',
            payload: random
        });
    }, []);

    console.log('question data', store.question);
    console.log('answer data', store.answer)
    

    return(
        <div>
            <h2>Question 1</h2>
            {store.question.map((content, id) => (
                <div key={id}>
                    <h3>{content.content}</h3>
                    <img src={content.question_image} />
                </div>
            ))}
            <AnswerOne />
        </div>
    );
}


export default QuestionOne;