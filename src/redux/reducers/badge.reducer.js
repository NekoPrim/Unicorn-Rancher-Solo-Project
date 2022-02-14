const badgeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BADGE':
            return action.payload;
        default:
            return state;
    }
};

  // badge will be on the redux state at:
  // state.badge
export default badgeReducer;