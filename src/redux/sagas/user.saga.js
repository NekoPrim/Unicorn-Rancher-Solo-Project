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
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // send data user router
    yield axios.put('/api/user/pic', config, { profile_image: action.payload});
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

    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // send data to user router
    yield axios.put('/api/user/username', config, { username: action.payload});
    console.log('update username sage', action.payload);

    // then
    yield put({ type: 'FETCH_USER' });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* deleteUserProfile() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // send data to user router
    yield axios.delete('/api/user');
  } catch (error) {
    console.log('User delete request failed', config, error);
  }
}

// worker Saga: will be fired on "UPDATE_USERNAME" actions
function* fetchAllUsers() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }
    
    // send data to user router
    const response = yield axios.get('/api/user/allUsers', config);
    console.log('All user response', response.data);

    yield put({ type: 'SET_ALL_USERS', config, payload: response.data});
  } catch (error) {
    console.log('All user GET request failed', error);
  }
} 

// worker Saga: will be fired on "DELETE_THIS_USER" actions
function* deleteThisUser(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }

    console.log('in deleteThisUser', config, action.payload);
    const userId = action.payload;

    // send data to user router
    yield axios.delete(`api/user/${userId}`);

    yield put({ type: 'FETCH_ALL_USERS' });
  } catch (error) {
    console.log('deleteThisUser GET request failed!', error);
  }
}

// watch for functions
function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);

  yield takeLatest('UPDATE_PIC', updatePic);

  yield takeLatest('UPDATE_USERNAME', updateUsername);

  yield takeLatest('DELETE_USER_PROFILE', deleteUserProfile);

  yield takeLatest('FETCH_ALL_USERS', fetchAllUsers);

  yield takeLatest('DELETE_THIS_USER', deleteThisUser);
}

export default userSaga;
