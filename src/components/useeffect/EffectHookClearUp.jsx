import React, { useState, useEffect } from "react";
import styled from "styled-components";

const EffectHookClearUp = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  console.log(
    `EffectHookClearUp component rendered and the width count value is ${widthCount}`
  );

  const currentScreenWidth = () => {
    setWidthCount(() => window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
    return () => {
      window.removeEventListener("resize", currentScreenWidth);
    };
  });
  return (
    <Wrapper>
      <h1>useEffect() Example - Clear Up</h1>
      <div className="container">
        <h2>
          The size of the window is <span> {widthCount} </span>
        </h2>
      </div>
      <p>
        EffectHookClearUp component rendered and the width count value is{" "}
        {widthCount}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }

  h2 {
    line-height: 5.2rem;
    font-size: 4.2rem;
  }

  span {
    color: #2e86c1;
  }
`;

export default EffectHookClearUp;
