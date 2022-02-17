import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

import Level from '../Level/Level';
import AnswerThree from '../Answer/AnswerThree';
import './Question.css';

const QuestionThree = () => {

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
    }, [dispatch]);

    // check question and answers
    console.log('question data', store.question);
    console.log('answer data', store.answer)
    
    // render question three to the DOM
    return(
        <div>
            {/* level data */}
            <Level />
            
            <div className="qArea">
            <h2 className="qTitle">
                Question 3
            </h2>
            {store.question.map((content, id) => (
                <div key={id}>
                    <h3 className="qContent">
                        {content.content}
                    </h3>
                </div>
            ))}
            </div>
            {/* answer data */}
            <AnswerThree />
        </div>
    );
}

export default QuestionThree;