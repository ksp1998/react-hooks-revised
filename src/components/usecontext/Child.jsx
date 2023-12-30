import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./themeContext";

const Child = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <h2>Child Component</h2>
      <div className="container">
        <h2>Current Theme: {theme}</h2>
        <button
          onClick={() =>
            setTheme((prev) => (prev == "dark" ? "light" : "dark"))
          }
        >
          Toggle Theme
        </button>
      </div>
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

export default Child;
