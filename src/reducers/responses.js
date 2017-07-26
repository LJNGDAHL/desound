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

// Used for keeping track of what state the fetching process is in.
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

export const askLastFm = (state = {}, action) => {
  switch(action.type) {
  case 'ASK_LASTFM': {
    return {
      ...state,
      artist: action.artist,
      limit: action.limit,
      method: action.method
    };
  }
  default:
    return state;
  }
};
