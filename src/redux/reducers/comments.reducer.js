// created feedback store variable
const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COMMENTS':
            return action.payload;
        default:
            return state;
    }
};

  // feedback will be on the redux state at:
  // state.feedback
export default commentsReducer;