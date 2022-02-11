import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* createUserAnswer(action) {
    console.log('in createUserAnswer', action.payload);
    const number = action.payload;

    try {
        // send data to router
        yield axios.post('/api/userAnswer', {number});

    
        // yield put({ type: 'SET_QUESTION', payload: response.data });
    } catch (error) {
        console.error('Level get request failed!', error);
    }
}

function* deleteUserAnswer() {
    console.log('in deleteUserAnswer');

    try{
        // send command to router
        yield axios.delete(`'/api/userAnswer`);
    } catch (error) {
        console.error('Delete userAnswer request failed!', error);
    }
}

function* userAnswerSaga() {
    yield takeLatest('CREATE_USER_ANSWER', createUserAnswer);

    yield takeLatest('DELETE_USER_ANSWER', deleteUserAnswer)
}

export default userAnswerSaga;