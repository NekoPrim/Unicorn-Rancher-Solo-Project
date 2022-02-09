import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

const QuestionOne = () => {

    // generate random number
    const randomNumberGenerator = (min, max) => {
        return Math.floor(Math.random() *  (1 + max - min) + min);
    }

    // setup dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        const random = randomNumberGenerator(1, 10);
        console.log('random number', random);
        dispatch({
            type: 'FETCH_QUESTION',
            payload: random
        });
    }, []);

    return (
        <div>

        </div>
    );
}

export default QuestionOne;