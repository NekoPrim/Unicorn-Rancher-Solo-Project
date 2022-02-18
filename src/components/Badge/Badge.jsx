import React from 'react';
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

    // find what badge user achieved
    let myBadge;
    const findNewBadge = (array) => {
        console.log('in findNewBadge');

        // loop through badge reducer to match id to new badge number
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
    console.log('new badge', myNewBadge);

    // render new badge to DOM
    return(
        <div>
            <Level />
            
            <div>
                <h1 className="bTitle">Congratulations!!!</h1>
                <h2 className="bTitle">{myNewBadge.name}</h2>
                <img className="bImg" src={myNewBadge.image} />
            </div>
            {/* navigate to home page */}
            <Link to='/home'>
                <button className="btn bBtn">
                    Home
                </button>
            </Link>
        </div>
    );
}

export default Badge;