const levelReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_LEVEL':
            return action.payload;
        default:
            return state;
    }
};

  // level will be on the redux state at:
  // state.level
export default levelReducer;