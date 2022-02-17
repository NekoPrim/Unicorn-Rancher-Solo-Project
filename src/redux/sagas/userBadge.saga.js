import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "CREATE_USER_BADGE" actions
function* createUserBadge(action) {
    console.log('in createUserBadge', action.payload);
    const number = action.payload;

    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        // send data to router
        yield axios.post('/api/userBadge', config, {number});

        yield put({ type: 'FETCH_USER_BADGE' });
    } catch (error) {
        console.error('userBadge POST request failed!', error);
    }
}

// worker Saga: will be fired on "FETCH_USER_BADGE" actions
function* fetchUserBadge() {
    console.log('in fetchUserBadge');

    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        // send request to router
        const response = yield axios.get('/api/userBadge', config);
        console.log('fetchUserBadge response.data', response.data);

        // then
        yield put({ type: 'SET_USER_BADGE', payload: response.data });
    } catch (error) {
        console.log('userBadge GET request failed', error);
    }
}

// watch for functions
function* userBadgeSaga() {
    yield takeLatest('CREATE_USER_BADGE', createUserBadge);
    
    yield takeLatest('FETCH_USER_BADGE', fetchUserBadge);
}

export default userBadgeSaga;