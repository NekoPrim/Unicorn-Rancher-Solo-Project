import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

import Level from '../Level/Level';
import AnswerTwo from '../Answer/AnswerTwo';

const QuestionTwo = () => {

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

        // GET new question with random number
        dispatch({ 
            type: 'FETCH_QUESTION',
            payload: random
        });

        // GET new answers with random number
        dispatch({
            type: 'FETCH_ANSWER',
            payload: random
        });
    }, []);

    // check question and answers
    console.log('question data', store.question);
    console.log('answer data', store.answer)
    
    // render question two to the DOM
    return(
        <div>
            {/* level data */}
            <Level />

            <h2>Question 2</h2>
            {store.question.map((content, id) => (
                <div key={id}>
                    <h3>{content.content}</h3>
                    <img src={content.question_image} />
                </div>
            ))}
            {/* answer data */}
            <AnswerTwo />
        </div>
    );
}

export default QuestionTwo;