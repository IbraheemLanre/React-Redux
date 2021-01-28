import * as actionTypes from "../actions/actions";
const resultreducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.value }),
      };

    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        (result) => result.id !== action.id
      );
      return { ...state, results: updatedArray };
    default:
      return state;
  }
};

const initialState = {
  results: [
    { id: 1, value: "This is my first list placeholder" },
    { id: 2, value: "This is my second list placeholder" },
  ],
};

export default resultreducer;
