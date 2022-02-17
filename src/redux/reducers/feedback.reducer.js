const feedbackReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEEDBACK':
            return action.payload;
        default:
            return state;
    }
};

  // badge will be on the redux state at:
  // state.badge
export default feedbackReducer;