import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

import './Admin.css';

const Admin = () => {

    // setup dispatch
    const dispatch = useDispatch();

    // gain access to global variable
    const store =  useReduxStore();
    console.log('all users', store.admin);

    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_USERS'});
    }, [dispatch]);

    return(
        <div>
            <table className="adminArea">
                <thead>
                    <tr className="adminHeaders">
                        <th>Player Name</th>
                        <th>Profile Picture</th>
                        <th>Remove Player</th>
                    </tr>
                </thead>
                <tbody>
                    {store.admin.map((users, id) => (
                        <tr className="adminData" key={id}>
                            <td>{users.username}</td>
                            <td>{users.profile_image}</td>
                            <td>
                                <button className="btn">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Admin;