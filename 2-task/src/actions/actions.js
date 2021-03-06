export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const ADDFIVE = "ADDFIVE";
export const REMOVEFIVE = "REMOVEFIVE";
export const RESET = "RESET";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const addFive = () => ({ type: ADDFIVE, value: 5 });
export const removeFive = () => ({ type: REMOVEFIVE, value: 5 });
export const reset = () => ({ type: RESET });
export const storeResult = (currentCounter) => ({
  type: STORE_RESULT,
  value: currentCounter,
});
export const deleteResult = (id) => ({
  type: DELETE_RESULT,
  id: id,
});
