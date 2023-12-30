import { useReducer } from "react";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import reducer from "./reducer";

const initialValue = 0;

const ReducerHook = () => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialValue);

  console.log(`ReducerHook component rendered and the count value is ${count}`);

  return (
    <Wrapper>
      <h1>useReducer() Example</h1>
      <div className="container">
        <button onClick={() => dispatch({ type: "DEC" })}>
          <FaMinus className="icon minus_icon" />
        </button>
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "INC" })}>
          <BiPlusMedical className="icon" />
        </button>
      </div>
      <p>ReducerHook component rendered and the count value is {count}</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default ReducerHook;
