// created feedback store variable
const feedbackReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEEDBACK':
            return {...state, ...action.payload};
        case 'CLEAR_FEEDBACK':
            return feedback;
        default:
            return state;
    }
};

  // feedback will be on the redux state at:
  // state.feedback
export default feedbackReducer;