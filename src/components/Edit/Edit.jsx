import React, { useState, Component } from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './Edit.css';

const Edit = () => {

    const [newPic, setNewPic] = useState('');
    const [newName, setNewName] = useState('');

    // setup dispatch
    const dispatch = useDispatch();

    // onClick PUT username
    const editPic = () => {
        // send data to user saga
        dispatch({
            type: 'UPDATE_PIC',
            payload: newPic
        });
    }

    // onClick PUT profile_image
    const editName = () => {
        console.log('in editName', newName);
        // send data to user saga
        dispatch({
            type:'UPDATE_USERNAME',
            payload: newName
        });
    }

    // onClick DELETE user
    const deleteProfile = () => {
        console.log('in deleteProfile');

        // alert before del
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
                // call function in user saga
                dispatch({ type: 'DELETE_USER_PROFILE'});
                    // logout
                dispatch({ type: 'LOGOUT' });
            }
        });

        // // call function in user saga
        // dispatch({ type: 'DELETE_USER_PROFILE'});
        // // logout
        // dispatch({ type: 'LOGOUT' });
    }

    return(
        <div>
            <div className="eArea">
            {/* enter in new profile pic */}
                <input
                    type="text"
                    className="pic form"
                    placeholder="new profile pic url"
                    onChange={(e) => setNewPic(e.target.value)}
                    value={newPic}
                />
            
                {/* navigate to profile page */}
                {/* can only access if value is in input */}
                <Link to='/profile'>
                <button
                    type="submit"
                    disabled={!newPic}
                    onClick={editPic}
                    className="btn form"
                >
                    Update Pic
                </button>
                </Link>
            </div>

            <div className="eArea">   
            {/* enter in new username */}
                <input
                    type="text"
                    className="name form"
                    placeholder="new user name"
                    onChange={(e) => setNewName(e.target.value)}
                    value={newName}
                />
            
                {/* navigate to profile page */}
                {/* can only be accessed if value in input */}
                <Link to='/profile'>
                <button
                    type="submit"
                    disabled={!newName}
                    onClick={editName}
                    className="btn form"
                >
                    Update Name
                </button>
                </Link>
            </div>
            
            <div className="eArea">
            {/* delete user profile */}
            <button
                type="submit"
                onClick={deleteProfile}
                className="btn form"
            >
                Delete Profile
            </button>
            </div>
        </div>
    );
}

export default Edit;