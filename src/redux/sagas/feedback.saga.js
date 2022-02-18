import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "CREATE_FEEDBACK" actions
function* createFeedback(action) {
    console.log('feedback to create', action.payload);

    try {

        // send request to feedback router
        yield axios.post('/api/feedback',  action.payload);

        // then reload feedback reducer
        yield put({ type: 'FETCH_FEEDBACK' });

    } catch (error) {
        console.log('feedback POST request failed', error);
    }
}

// worker Saga: will be fired on "FETCH_FEEDBACK" actions
function* fetchFeedback() {

    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        
        // send request to feedback router
        const response = yield axios.get('/api/feedback', config);
        console.log('feedback saga response', response.data);

        // then set feedback reducer
        yield put({ 
            type: 'SET_FEEDBACK', 
            payload: response.data 
        });
    } catch (error) {
        console.log('feedback GET request failed', error);
    } 
}

// worker Saga: will be fired on "FETCH_FEEDBACK" actions
function* fetchComments() {

    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        
        // send request to feedback router
        const response = yield axios.get('/api/feedback/comments', config);
        console.log('comments saga response', response.data);

        // then set comments reducer
        yield put({ 
            type: 'SET_COMMENTS', 
            payload: response.data 
        });
    } catch (error) {
        console.log('comments GET request failed', error);
    } 
}

// watch for functions
function* feedbackSaga() {
    yield takeLatest('CREATE_FEEDBACK', createFeedback);

    yield takeLatest('FETCH_FEEDBACK', fetchFeedback);

    yield takeLatest('FETCH_COMMENTS_FEEDBACK', fetchComments);
}

export default feedbackSaga;