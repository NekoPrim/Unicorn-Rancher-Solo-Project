import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

const Level = () => {

    // setup dispatch and redux store
    const dispatch = useDispatch();
    const store = useReduxStore();

    // get access to global level variable
    console.log('level data', store.level);

    // request data be stored in reducer
    useEffect(() => {
        dispatch({ type: 'FETCH_LEVEL' });
    }, []);

    return(
        <div>
            <h2>{store.level.id}</h2>
        </div>
    );
}

export default Level;