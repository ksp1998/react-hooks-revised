import { useState, useEffect } from "react";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";

const EffectHook = () => {
  const [count, setCount] = useState(0);

  console.log(`EffectHook component rendered and the count value is ${count}`);

  useEffect(() => {
    document.title = `Effect Counter ${count}`;
  }, [count]);

  return (
    <Wrapper>
      <h1>useEffect() Example</h1>
      <div className="container">
        <button onClick={() => count > 0 && setCount(count - 1)}>
          <FaMinus className="icon minus_icon" />
        </button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>
          <BiPlusMedical className="icon" />
        </button>
      </div>
      <p>EffectHook component rendered and the count value is {count}</p>
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

export default EffectHook;
