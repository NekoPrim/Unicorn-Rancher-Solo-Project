const questionReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_QUESTION':
            return action.payload;
        default:
            return state;
    }
};

  // level will be on the redux state at:
  // state.level
export default questionReducer;