const pointsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_POINTS':
            return action.payload;
        default:
            return state;
    }
};

  // points will be on the redux state at:
  // state.points
export default pointsReducer;