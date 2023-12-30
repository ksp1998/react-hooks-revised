// useLayoutEffect, runs synchronously after a render but before
// the screen is updated.

// useEffect runs asynchronously and after a render is painted to the screen.

import React, { useState, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";

const LayoutEffect = () => {
  const [num, setNum] = useState(0);

  // useEffect(() => {
  //   console.log("in useEffect");
  //   for (let i = 1; i <= 1000000000; i++) {
  //     // console.log("logging", i);
  //   }
  //   if (num === 0) {
  //     setNum(Math.ceil(num + Math.random() * 100));
  //   }
  // }, [num]);

  useLayoutEffect(() => {
    console.log("in useLayoutEffect");
    for (let i = 1; i <= 1000000000; i++) {
      // console.log("logging", i);
    }
    if (num === 0) {
      setNum(Math.ceil(num + Math.random() * 100));
    }
  }, [num]);

  return (
    <Wrapper>
      <h1>useLayoutEffect() Example</h1>
      {(() => {
        console.log("Component rendered!");
        return <h2>Anonymous Component Rendered!</h2>;
      })()}
      <p>My new random number {num}</p>
      <button onClick={() => setNum(0)}>Generate Random Number</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default LayoutEffect;
