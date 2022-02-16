const adminReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_USERS':
            return action.payload;
        default:
            return state;
    }
};

  // admin will be on the redux state at:
  // state.admin
export default adminReducer;