import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* userAnswer(action) {
    console.log('in userAnswer', action.payload);
    const number = action.payload;

    try {

        // send data to router
        yield axios.post('/api/userAnswer', {number});

    
        // yield put({ type: 'SET_QUESTION', payload: response.data });
    } catch (error) {
        console.log('Level get request failed', error);
    }
}

function* userAnswerSaga() {
    yield takeLatest('CREATE_USER_ANSWER', userAnswer);
}

export default userAnswerSaga;