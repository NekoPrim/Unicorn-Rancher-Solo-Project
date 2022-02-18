import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "CREATE_USER_ANSWER" actions
function* createUserAnswer(action) {
    console.log('in createUserAnswer', action.payload);
    const number = action.payload;

    try {
        
        // send data to user answer router
        yield axios.post('/api/userAnswer', {number});

        } catch (error) {
        console.error('Level get request failed!', error);
    }
}

// worker Saga: will be fired on "DELETE_USER_ANSWER" actions
function* deleteUserAnswer() {
    console.log('in deleteUserAnswer');

    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        // send command to user answer router
        yield axios.delete('/api/userAnswer', config);
    } catch (error) {
        console.error('Delete userAnswer request failed!', error);
    }
}

// watch for functions
function* userAnswerSaga() {
    yield takeLatest('CREATE_USER_ANSWER', createUserAnswer);

    yield takeLatest('DELETE_USER_ANSWER', deleteUserAnswer)
}

export default userAnswerSaga;