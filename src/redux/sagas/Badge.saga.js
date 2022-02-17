import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_BADGE" actions
function* fetchBadge() {

    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        // send request to router
        const response = yield axios.get('/api/badge', config);

        // then
        yield put({ type: 'SET_BADGE', payload: response.data });
    } catch (error) {
        console.log('badge GET request failed', error);
    }
}

// watch for functions
function* badgeSaga() {
    yield takeLatest('FETCH_BADGE', fetchBadge);
}

export default badgeSaga;