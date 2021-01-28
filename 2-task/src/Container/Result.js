import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeResult, deleteResult } from "../actions/actions";

const Result = () => {
  const result = useSelector((state) => state.resRed.results);
  const dispatch = useDispatch();
  const currentCounter = useSelector((state) => state.ctrRed.counter);

  return (
    <div>
      <button onClick={() => dispatch(storeResult(currentCounter))}>
        Store Result
      </button>
      <ul>
        {result.map((item) => (
          <li onClick={() => dispatch(deleteResult(item.id))} key={item.id}>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
