import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Edit = () => {

    const [newPic, setNewPic] = useState('');
    const [newName, setNewName] = useState('');

    // setup dispatch
    const dispatch = useDispatch();

    // onClick PUT username
    const editPic = () => {
        // send data to database
        dispatch({
            type: 'UPDATE_PIC',
            payload: newPic
        });
    }

    // onClick PUT profile_image
    const editName = () => {
        console.log('in editName', newName);
        // send data to database
        dispatch({
            type:'UPDATE_USERNAME',
            payload: newName
        });
    }

    return(
        <div>
                <input
                    type="text"
                    placeholder="new profile pic url"
                    onChange={(e) => setNewPic(e.target.value)}
                    value={newPic}
                />
                <button
                    type="submit"
                    disabled={!newPic}
                    onClick={editPic}
                    className="btn"
                >
                    Update Pic
                </button>

                <input
                    type="text"
                    placeholder="new user name"
                    onChange={(e) => setNewName(e.target.value)}
                    value={newName}
                />
                <button
                    type="submit"
                    disabled={!newName}
                    onClick={editName}
                    className="btn"
                >
                    Update Name
                </button>
        </div>
    );
}

export default Edit;