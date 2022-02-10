import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import level from './level.reducer';
import question from './question.reducer';
import answer from './answer.reducer';
import selected from './selected.reducer';

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
});

export default rootReducer;
