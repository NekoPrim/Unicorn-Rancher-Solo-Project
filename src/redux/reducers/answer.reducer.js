const answerReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ANSWER':
            return action.payload;
        default:
            return state;
    }
};

  // answer will be on the redux state at:
  // state.answer
export default answerReducer;