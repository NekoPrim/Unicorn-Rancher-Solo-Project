import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import levelSaga from './level.saga';
import questionSaga from './question.saga';
import answerSaga from './answer.saga';
import userAnswerSaga from './userAnswer.saga';
import pointsSaga from './points.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    levelSaga(), // GET levels
    questionSaga(), // GET questions
    answerSaga(), // GET answers
    userAnswerSaga(), // POST user answer and DELETE user answer
    pointsSaga(), // GET points
  ]);
}
