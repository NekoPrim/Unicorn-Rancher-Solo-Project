import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_POINTS" actions
function* fetchpoints() {
    console.log('in fetchpoints');

    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        // send request to router
        const response = yield axios.get('/api/points', config);

        // then
        yield put({ type: 'SET_POINTS', payload: response.data });
    } catch (error) {
        console.log('points GET request failed', error);
    }
}

// watch for functions
function* pointsSaga() {
    yield takeLatest('FETCH_POINTS', fetchpoints);
}

export default pointsSaga;