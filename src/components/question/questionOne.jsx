import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

import Level from '../Level/Level';
import AnswerOne from '../Answer/AnswerOne';
import './Question.css';

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
        // generate random number
        const random = randomNumberGenerator(1, 10);
        console.log('random', random);

        // GET level data
        dispatch({ type: 'FETCH_LEVEL' });

        // GET question with random number
        dispatch({ 
            type: 'FETCH_QUESTION',
            payload: random
        });

        // GET answers with random numbers
        dispatch({
            type: 'FETCH_ANSWER',
            payload: random
        });

        // DELETE user_answer at start of game
        dispatch({ type: 'DELETE_USER_ANSWER' })
    }, []); // end useEffect

    // check question and answers
    console.log('question data', store.question);
    console.log('answer data', store.answer)
    
    // render question one to the DOM
    return(
        <div>
            {/* level data */}
            <Level />
                
            <h2 className="qTitle">Question 1</h2>
            {store.question.map((content, id) => (
                <div key={id}>
                    <h3 className="qContent">{content.content}</h3>
                    <img className="qImg" src={content.question_image} />
                </div>
            ))}
            {/* answer data */}
            <AnswerOne />
        </div>
    );
}


export default QuestionOne;