import React, { useRef } from "react";
import styled from "styled-components";

const RefHookDOM = () => {
  const btnRef = useRef();

  const changeBtnColor = () => {
    const colors = ["red", "darkgreen", "darkred", "blue", "black", "maroon"];
    btnRef.current.focus();
    btnRef.current.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Wrapper>
      <h1>useRef() Example - DOM Element</h1>
      <button onClick={changeBtnColor} ref={btnRef}>
        Click to Change Color
      </button>
      <p>The changes will take place without rerendering the component.</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    text-transform: uppercase;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default RefHookDOM;
