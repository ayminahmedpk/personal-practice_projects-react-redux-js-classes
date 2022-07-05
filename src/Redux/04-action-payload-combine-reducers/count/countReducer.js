

import { INCREMENT, DECREMENT } from "./countTypes";

// random value for testing
const initialState = { count: 0 }

export const countReducer = (state = initialState, action) => {

  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1};
    
    case DECREMENT:
      return {...state, count: state.count - 1};

    default:
      return state;
  }

}
