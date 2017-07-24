function testReducer(state = {}, action) {
  switch(action.type) {
  case 'TEST_INCREMENTING': {
    return {
      ...state,
      klick: (state.klick || 0) + 1
    };
  }
  default:
    return state;
  }
}

export default testReducer;
