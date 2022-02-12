import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "CREATE_USER_BADGE" actions
function* createUserBadge(action) {
    console.log('in createUserBadge', action.payload);
    const number = action.payload;

    try {
        // send data to router
        yield axios.post('/api/userBadge', {number});

        yield put({ type: 'SET_USER_BADGE', payload: response.data });
    } catch (error) {
        console.error('userBadge POST request failed!', error);
    }
}

// worker Saga: will be fired on "FETCH_USER_BADGE" actions
function* fetchUserBadge() {
    console.log('in fetchUserBadge');

    try {

        // send request to router
        const response = yield axios.get('/api/userBadge');

        // then
        yield put({ type: 'SET_USER_BADGE', payload: response.data });
    } catch (error) {
        console.log('userBadge GET request failed', error);
    }
}

function* userBadgeSaga() {
    yield takeLatest('CREATE_USER_BADGE', createUserBadge);
    
    yield takeLatest('FETCH_USER_BADGE', fetchUserBadge);
}

export default userBadgeSaga;