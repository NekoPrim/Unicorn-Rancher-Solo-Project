import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_BADGE" actions
function* createFeedback(action) {
    console.log('feedback to create', action.payload);

    try {

        // send request to router
        yield axios.post('/api/feedback',  action.payload);

    } catch (error) {
        console.log('feedback POST request failed', error);
    }
}

// watch for functions
function* feedbackSaga() {
    yield takeLatest('CREATE_FEEDBACK', createFeedback);
}

export default feedbackSaga;