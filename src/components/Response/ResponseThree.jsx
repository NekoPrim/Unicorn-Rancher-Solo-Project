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
        // GET points data
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

    // find badge number
    const findBadge = () => {
        let myBadge = 0;
        if (total === 9) {
            return myBadge = 4;
        }
        else if (total >= 5) {
            return myBadge = 3;
        }
        else if (total >= 1) {
            return myBadge = 2;
        }
        else if (total === 0) {
            return myBadge = 1;
        }
        return myBadge;
    }
    
    const userBadge = findBadge(total);
    console.log('userBadge', userBadge);

    // On click send data to badge saga
    const addBadge = () => {
        console.log('in addBadge');

        dispatch({
            type: 'SET_NEW_BADGE',
            payload: userBadge
        });
        dispatch({
            type: 'CREATE_USER_BADGE',
            payload: userBadge
        });
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
                <button className="btn rBtn" onClick={addBadge}>
                    Finished!
                </button>
            </Link>
        </div>
    );
}

export default ResponseThree;