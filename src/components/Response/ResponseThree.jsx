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
    })

    return(
        <div>
            {/* level data */}
            <Level />

            <h2 className="rContent">{store.selected.response}</h2>
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