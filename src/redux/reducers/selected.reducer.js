const selectedReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED':
            return action.payload;
        default:
            return state;
    }
};

  // selected will be on the redux state at:
  // state.level
export default selectedReducer;