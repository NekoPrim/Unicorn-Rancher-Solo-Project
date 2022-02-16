import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

// worker Saga: will be fired on "UPDATE_PIC" actions
function* updatePic(action) {
  try {

    // send data user router
    yield axios.put('/api/user/pic', { profile_image: action.payload});
    console.log('update user pic saga', action.payload);

    // then
    yield put({ type: 'FETCH_USER' });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

// worker Saga: will be fired on "UPDATE_USERNAME" actions
function* updateUsername(action) {
  try {

    // send data to user router
    yield axios.put('/api/user/username', { username: action.payload});
    console.log('update username sage', action.payload);

    // then
    yield put({ type: 'FETCH_USER' });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* deleteUserProfile() {
  try {

    // send data to user router
    yield axios.delete('/api/user');
  } catch (error) {
    console.log('User delete request failed', error);
  }
}

// worker Saga: will be fired on "UPDATE_USERNAME" actions
function* fetchAllUsers() {
  try {
    
    const response = yield axios.get('/api/user/allUsers');
    console.log('All user response', response.data);

    yield put({ type: 'SET_ALL_USERS', payload: response.data});
  } catch (error) {
    console.log('All user GET request failed', error);
  }
} 

// watch for functions
function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);

  yield takeLatest('UPDATE_PIC', updatePic);

  yield takeLatest('UPDATE_USERNAME', updateUsername);

  yield takeLatest('DELETE_USER_PROFILE', deleteUserProfile);

  yield takeLatest('FETCH_ALL_USERS', fetchAllUsers);
}

export default userSaga;
