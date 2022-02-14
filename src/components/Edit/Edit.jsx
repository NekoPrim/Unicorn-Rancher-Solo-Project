import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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

    return(
        <div>
            {/* enter in new profile pic */}
                <input
                    type="text"
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
                    className="btn"
                >
                    Update Pic
                </button>
                </Link>

                <input
                    type="text"
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
                    className="btn"
                >
                    Update Name
                </button>
                </Link>
        </div>
    );
}

export default Edit;