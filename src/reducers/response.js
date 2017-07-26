function response(state = {}, action) {
  switch(action.type) {
  case 'ON_ERROR_WITH_REDUX': {
    // TODO: Remove console.log. TODO: Your fetch stuff should not be here.
    console.log(`Reducer is in place!\nYour message: ${action.message}`);
    return {
      ...state,
      fetchCompleted: false,
      fetchPending: false,
      fetchInitialized: false,
      message: action.message
    };
  }
  default:
    return state;
  }
}

export default response;
