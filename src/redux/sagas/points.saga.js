import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_POINTS" actions
function* fetchpoints() {
    console.log('in fetchpoints');

    try {

        // send request to router
        const response = yield axios.get('/api/points');

        // then
        yield put({ type: 'SET_POINTS', payload: response.data });
    } catch (error) {
        console.log('points GET request failed', error);
    }
}

function* pointsSaga() {
    yield takeLatest('FETCH_POINTS', fetchpoints);
}

export default pointsSaga;