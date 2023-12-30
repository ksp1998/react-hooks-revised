import React, { useState, useMemo } from "react";
import styled from "styled-components";

const MemoHook = () => {
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(false);

  // Expensive operation
  const calculateSquare = (num) => {
    for (let i = 0; i <= 1000000000; i++) {}
    return num * num;
  };

  // Without useMemo
  // const getSquare = calculateSquare();

  // Without useMemo
  const getSquare = useMemo(() => {
    return calculateSquare(num);
  }, [num]);

  return (
    <Wrapper>
      <h1>useMemo() Example</h1>
      <button
        onClick={() => setNum(num + 1)}
        style={{ backgroundColor: "red" }}
      >
        Counter {"=>"} {num}
      </button>
      <p>Expensive operation result ( Square of the Number ) : {getSquare} </p>
      <button onClick={() => setShow(!show)}>
        {show ? "You Clicked Me" : "Click Me Plz"}
      </button>
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

export default MemoHook;
