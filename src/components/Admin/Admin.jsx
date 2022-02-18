import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import Swal from 'sweetalert2';

import './Admin.css';

const Admin = () => {

    // setup dispatch
    const dispatch = useDispatch();

    // gain access to global variable
    const store =  useReduxStore();
    console.log('all users', store.admin);

    // GET all user data
    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_USERS'});
    }, []);

    // function called onClick
    const handleDelete = (users) => {
        console.log('in handleDelete', users.id);
        
        Swal.fire({
            title: 'Are you sure?',
            text: "No back-sies",
            icon: 'warning',
            backgroundColor: 'honeydew',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'mediumvioletred',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your no longer a unicorn rancher.',
                    'success',
                );
                dispatch({
                    type: 'DELETE_THIS_USER',
                    payload: users.id
                });
            }
        });
    }

    // append all users to the DOM
    return(
        <div>
            <table className="adminArea">
                <thead>
                    <tr className="adminHeaders">
                        <th>
                            Player Name
                        </th>
                        <th>
                            Profile Picture
                        </th>
                        <th>
                            Remove Player
                        </th>
                    </tr>
                </thead>
                <tbody>
                     {/* loop through admin reducer */}
                    {store.admin.map((users, id) => (
                        <tr className="adminData" key={id}>
                            <td>
                                {users.username}
                            </td>
                            <td>
                                <img className="apImg" src={users.profile_image}/>
                            </td>
                            <td>
                                {/* delete this user */}
                                <button 
                                    className="btn"
                                    onClick={() => handleDelete(users)}
                                >
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