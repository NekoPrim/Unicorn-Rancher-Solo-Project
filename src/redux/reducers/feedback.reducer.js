// created feedback store variable
const feedbackReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEEDBACK':
            return action.payload;
        default:
            return state;
    }
};

  // feedback will be on the redux state at:
  // state.feedback
export default feedbackReducer;