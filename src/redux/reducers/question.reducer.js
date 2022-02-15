const questionReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_QUESTION':
            return action.payload;
        default:
            return state;
    }
};

  // question will be on the redux state at:
  // state.question
export default questionReducer;