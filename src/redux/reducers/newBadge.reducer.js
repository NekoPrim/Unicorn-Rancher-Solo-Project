const newBadgeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEW_BADGE':
            return action.payload;
        default:
            return state;
    }
};

  // badge number will be on the redux state at:
  // state.newBadge
export default newBadgeReducer;