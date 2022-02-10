const answerReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ANSWER':
            return action.payload;
        default:
            return state;
    }
};

  // level will be on the redux state at:
  // state.level
export default answerReducer;