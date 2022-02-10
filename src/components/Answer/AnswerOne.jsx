import React, { useDispatch } from 'react';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';

const AnswerOne = () => {

    // access global variables
    const store = useReduxStore();

    const handleSelected = (content) => {
        dispatchEvent({
            type: 'SET_SELECTED',
            payload: content
        })
    }

    return(
        <div>
            {store.answer.map((content, id) => (
                <div key={id} onClick={() => handleSelected(content)}>
                    <h3>{content.content}</h3>
                </div>
            ))}
        </div>
    );
}

export default AnswerOne;