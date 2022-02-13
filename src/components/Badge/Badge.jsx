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

    let myBadge;
    const findNewBadge = (array) => {
        console.log('in findNewBadge');

        for (let thisBadge of array) {
            if (thisBadge.id === newBadge) {
                myBadge = thisBadge;
            }
        }
        return myBadge;
    }
    const myNewBadge = findNewBadge(userBadge);
    console.log('new badge', myNewBadge)

    // // setup dispatch
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     // GET badge data
    //     dispatch({ type: 'FETCH_USER_BADGE' });
    // }, []);

    return(
        <div>
            <Level />
            
            <div>
                <h1 className="bTitle">Congratulations!!!</h1>
                <h2 className="bTitle">{myNewBadge.name}</h2>
                <img className="bImg" src={myNewBadge.image} />
            </div>
            <Link to='/home'>
                <button className="btn bBtn">
                    Home
                </button>
            </Link>
        </div>
    );
}

export default Badge;