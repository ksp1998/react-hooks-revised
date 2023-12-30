// The React useCallback Hook returns a memoized callback function.

import { useCallback, useState } from "react";
import Todos from "./Todos";
import styled from "styled-components";

const CallbackHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  //Without useCallback
  // const addTodo = () => setTodos((prev) => [...prev, "Todo"]);

  // With useCallback
  const addTodo = useCallback(() => {
    return setTodos((prev) => [...prev, `New Todo`]);
  }, [todos]);

  return (
    <Wrapper>
      <h1>useCallback() Example</h1>
      <Todos todos={todos} addTodo={addTodo} />
      <br />
      <div>
        Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default CallbackHook;
