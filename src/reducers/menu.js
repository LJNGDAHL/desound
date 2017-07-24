function menu(state = {}, action) {
  switch(action.type) {
  case 'TOGGLE_MENU': {
    return {
      ...state,
      open: !state.open
    };
  }
  default:
    return state;
  }
}

export default menu;
