const newBadgeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEW_BADGE':
            return action.payload;
        default:
            return state;
    }
};

  // selected will be on the redux state at:
  // state.selected
export default newBadgeReducer;