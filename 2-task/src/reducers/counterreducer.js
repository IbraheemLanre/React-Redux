import * as actionTypes from "../actions/actions";

const counterreducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREASE:
      return { ...state, counter: state.counter > 0 ? state.counter - 1 : 0 };
    case actionTypes.ADDFIVE:
      return { ...state, counter: state.counter + action.value };
    case actionTypes.REMOVEFIVE:
      return {
        ...state,
        counter:
          state.counter > action.value ? state.counter - action.value : 0,
      };
    case actionTypes.RESET:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

const initialState = {
  counter: 0,
};

export default counterreducer;
