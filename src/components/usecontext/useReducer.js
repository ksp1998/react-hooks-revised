import { useState } from "react";

export default useReducer = (reducer, initialValue = null) => {
  const [state, setState] = useState(initialValue);

  const dispatch = (action) => {
    const nextState = reducer(state, action);
    setState(nextState);
  };

  return [state, dispatch];
};
