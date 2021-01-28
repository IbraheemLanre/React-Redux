import * as actionType from "../action/Action";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionType.DECREMENT:
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : 0,
      };
    case actionType.RESET:
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
  // Using if-else
  //   if (action.type === "INCREMENT") {
  //     return {
  //       ...state,
  //       counter: state.counter + 1,
  //     };
  //   } else if (action.type === "DECREMENT") {
  //     return {
  //       ...state,
  //       counter: state.counter - 1,
  //     };
  //   } else if (action.type === "RESET") {
  //     return {
  //       ...state,
  //       counter: 0,
  //     };
  //   }
  //   return state;
};

const initialState = {
  counter: 0,
};

export default reducer;
