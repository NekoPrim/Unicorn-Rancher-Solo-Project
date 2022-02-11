import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

import Level from '../Level/Level';
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
        // generate random number
        const random = randomNumberGenerator(1, 10);
        console.log('random', random);

        // get level data
        dispatch({ type: 'FETCH_LEVEL' });

        // get question with random number
        dispatch({ 
            type: 'FETCH_QUESTION',
            payload: random
        });

        // get answers with random numbers
        dispatch({
            type: 'FETCH_ANSWER',
            payload: random
        });
    }, []); // end useEffect

    // check question and answers
    console.log('question data', store.question);
    console.log('answer data', store.answer)
    
    // render question one to the DOM
    return(
        <div>
            <Level />
                
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