import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

const Admin = () => {

    // setup dispatch
    const dispatch = useDispatch();

    // gain access to global variable
    const store =  useReduxStore();
    console.log('all users', store.user);

    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_USERS'});
    })

    return(
        <div>

        </div>
    );
}

export default Admin;