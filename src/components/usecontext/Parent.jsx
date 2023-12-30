import styled from "styled-components";
import Child from "./Child";

const Parent = () => {
  return (
    <Wrapper>
      <h2>Parent Component</h2>
      <Child />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1em;
  border: 1px solid red;
  border-radius: 0.5em;

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

export default Parent;
