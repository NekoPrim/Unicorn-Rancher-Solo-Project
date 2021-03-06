import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_LEVEL" actions
function* fetchLevel() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        
        // send request to level router
        const response = yield axios.get('/api/level', config);

        // then set level reducer
        yield put({ 
            type: 'SET_LEVEL', 
            payload: response.data 
        });
    } catch (error) {
        console.log('Level get request failed', error);
    }
}

// watch for functions
function* levelSaga() {
    yield takeLatest('FETCH_LEVEL', fetchLevel);
}

export default levelSaga;