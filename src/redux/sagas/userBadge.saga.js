import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* createUserBadge(action) {
    console.log('in createUserAnswer', action.payload);
    const number = action.payload;

    try {
        // send data to router
        yield axios.post('/api/userBadge', {number});

        // yield put({ type: 'SET_QUESTION', payload: response.data });
    } catch (error) {
        console.error('userBadge GET request failed!', error);
    }
}

function* userBadgeSaga() {
    yield takeLatest('CREATE_USER_BADGE', createUserBadge);
}

export default userBadgeSaga;