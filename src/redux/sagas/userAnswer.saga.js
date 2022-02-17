import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "CREATE_USER_BADGE" actions
function* createUserAnswer(action) {
    console.log('in createUserAnswer', action.payload);
    const number = action.payload;

    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        // send data to router
        yield axios.post('/api/userAnswer', config, {number});

        } catch (error) {
        console.error('Level get request failed!', error);
    }
}

function* deleteUserAnswer() {
    console.log('in deleteUserAnswer');

    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        // send command to router
        yield axios.delete('/api/userAnswer', config);
    } catch (error) {
        console.error('Delete userAnswer request failed!', error);
    }
}

function* userAnswerSaga() {
    yield takeLatest('CREATE_USER_ANSWER', createUserAnswer);

    yield takeLatest('DELETE_USER_ANSWER', deleteUserAnswer)
}

export default userAnswerSaga;