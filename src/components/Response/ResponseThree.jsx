import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { Link } from 'react-router-dom';

import Level from '../Level/Level';
import './Response.css';

const ResponseThree = () => {

    // gain access to global variables
    const store = useReduxStore();
    console.log('selected answer', store.selected);

    // setup dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_POINTS' });
    }, []);

    // check user points
    console.log('user points', store.points);
    const score = store.points;

    // add up user points to get total
    const add = (array) => {
        let sum = 0;
        array.map((point) => {
            sum += point.points;
        });
        return sum;
    }
    const total = add(score);
    console.log('total', total);

    const mybadge;
    if (total = 0) {

    }

    return(
        <div>
            {/* level data */}
            <Level />
            <div>
            <h2 className="rContent">{store.selected.response}</h2>
            <img className="rImg" src={store.selected.question_image} />
            </div>
            {/* navigate to badge component */}
            <Link to="/badge">
                <button className="btn rBtn">
                    Finished!
                </button>
            </Link>
        </div>
    );
}

export default ResponseThree;