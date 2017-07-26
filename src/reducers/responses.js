export const onError = (state = {}, action) => {
  switch(action.type) {
  case 'ON_ERROR': {
    return {
      ...state,
      error: action.error,
      message: action.message
    };
  }
  default:
    return state;
  }
};

export const fetchStatus = (state = {}, action) => {
  switch(action.type) {
  case 'FETCH_STATUS': {
    return {
      ...state,
      initialized: action.initialized,
      pending: action.pending,
      completed: action.completed
    };
  }
  default:
    return state;
  }
};

