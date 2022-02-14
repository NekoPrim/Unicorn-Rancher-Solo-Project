const userBadgeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_BADGE':
            return action.payload;
        default:
            return state;
    }
};

  // userBadge will be on the redux state at:
  // state.userBadge
export default userBadgeReducer;