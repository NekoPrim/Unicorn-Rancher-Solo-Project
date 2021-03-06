import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import level from './level.reducer';
import question from './question.reducer';
import answer from './answer.reducer';
import selected from './selected.reducer';
import points from './points.reducer';
import newBadge from './newBadge.reducer';
import userBadge from './userBadge.reducer';
import badge from './badge.reducer';
import admin from './admin.reducer';
import feedback from './feedback.reducer';
import comments from './comments.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  level, // will have an id, name, and number
  question, // will have an id, content, level_number, and question_image
  answer, // will have an id, content, response, question_id, and points
  selected, // will have selected answer (id, content, response, question_id, and points)
  points, // will have selected answer points
  newBadge, // will have new badge
  userBadge, // will have id, name, image
  badge, // will have id, name, and image
  admin, // will have user id, username, profile_image, and authLevel
  feedback, // will have avg navigation, avg understanding, and avg fun
  comments, // will hav user comments
});

export default rootReducer;
