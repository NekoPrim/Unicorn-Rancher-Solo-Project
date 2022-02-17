// created feedback store variable
const feedback = {
    navigate: '', 
    understand: '',
    fun: '',
    comments: ''
};

const feedbackReducer = (state = feedback, action) => {
    switch (action.type) {
        case 'ADD_FEEDBACK':
            return {...state, ...action.payload};
        case 'CLEAR_FEEDBACK':
            return feedback;
        default:
            return state;
    }
};

  // badge will be on the redux state at:
  // state.badge
export default feedbackReducer;