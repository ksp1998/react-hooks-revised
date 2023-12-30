// it create a mutable variable which will not re-render the components
// Used to access the DOM element directly

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const RefHookInput = () => {
  const [userInput, setUserInput] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <Wrapper>
      <h1>useRef() Example - Input Element</h1>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <p>The component rendered {count.current} times.</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    min-width: 20rem;
    padding: 1rem 0.5rem;
    color: #fff;
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default RefHookInput;
