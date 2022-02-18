import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ANSWER" actions
function* fetchAnswer(action) {
    console.log('in fetchAnswer', action.payload);
    const id = action.payload;

    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        // send request to answer router
        const response = yield axios.get(`/api/answer/${id}`, config, {id} );

        // then set answer reducer
        yield put({ type: 'SET_ANSWER', payload: response.data });
    } catch (error) {
        console.log('answer GET request failed', error);
    }
}

// watch for functions
function* answerSaga() {
    yield takeLatest('FETCH_ANSWER', fetchAnswer);
}

export default answerSaga;