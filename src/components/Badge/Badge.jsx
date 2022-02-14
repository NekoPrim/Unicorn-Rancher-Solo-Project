import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useReduxStore from '../../hooks/useReduxStore';

import Level from '../Level/Level';
import './Badge.css';

const Badge = () => {
 
    // gain access to global variables
    const store = useReduxStore();
    console.log('user new badge', store.newBadge);
    console.log('badges', store.badge);
    const newBadge = store.newBadge;
    const Badge = store.badge;

    let myBadge;
    const findNewBadge = (array) => {
        console.log('in findNewBadge');

        for (let thisBadge of array) {
            console.log('array', array);
            console.log('thisBadge', thisBadge)
            if (thisBadge.id === newBadge) {
                myBadge = thisBadge;
            }
        }
        return myBadge;
    }
    console.log('myBadge', myBadge);
    const myNewBadge = findNewBadge(Badge);
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