const userBadgeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_BADGE':
            return action.payload;
        default:
            return state;
    }
};

  // points will be on the redux state at:
  // state.points
export default userBadgeReducer;