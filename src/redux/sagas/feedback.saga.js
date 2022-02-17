import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_BADGE" actions
function* fetchFeedback() {

    try {

        // send request to router
        const response = yield axios.get('/api/feedback');

        // then
        yield put({ type: 'SET_FEEDBACK', payload: response.data });
    } catch (error) {
        console.log('feedback GET request failed', error);
    }
}

// watch for functions
function* feedbackSaga() {
    yield takeLatest('FETCH_FEEDBACK', fetchFeedback);
}

export default feedbackSaga;