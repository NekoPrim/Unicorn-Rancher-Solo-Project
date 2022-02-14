import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_QUESTION" actions
function* fetchQuestion(action) {
    console.log('in fetchQuestion', action.payload);
    const id = action.payload;

    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        // send request to router
        const response = yield axios.get(`/api/question/${id}`, config, {id} );

        // then
        yield put({ type: 'SET_QUESTION', payload: response.data });
    } catch (error) {
        console.log('question GET request failed', error);
    }
}

// watch for functions
function* questionSaga() {
    yield takeLatest('FETCH_QUESTION', fetchQuestion);
}

export default questionSaga;