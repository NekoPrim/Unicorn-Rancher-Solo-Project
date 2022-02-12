import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useReduxStore from '../../hooks/useReduxStore';

import Level from '../Level/Level';
import './Badge.css';

const Badge = () => {
 
    // gain access to global variables
    const store = useReduxStore();
    console.log('user new badge', store.newBadge);
    console.log('user badges', store.userBadge);
    const newBadge = store.newBadge;
    const userBadge = store.userBadge;

    const findNewBadge = () => {
        console.log('in findNewBadge');

        const myBadge;

        for (let new of userBadge) {
            
        }
    }

    // // setup dispatch
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     // GET badge data
    //     dispatch({ type: 'FETCH_USER_BADGE' });
    // }, []);

    return(
        <div>
            <Level />
            <h1 className="bTitle">Congratulations!!!</h1>
            <Link to='/home'>
                <button className="btn bBtn">
                    Home
                </button>
            </Link>
        </div>
    );
}

export default Badge;