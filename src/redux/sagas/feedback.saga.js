import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_BADGE" actions
function* createFeedback(action) {

    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        // send request to router
        const response = yield axios.post('/api/feedback', config, action.payload);

        // then
        yield put({ type: 'SET_FEEDBACK', payload: response.data });
    } catch (error) {
        console.log('feedback POST request failed', error);
    }
}

// watch for functions
function* feedbackSaga() {
    yield takeLatest('CREATE_FEEDBACK', createFeedback);
}

export default feedbackSaga;