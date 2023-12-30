import styled from "styled-components";
import { useTheme } from "../custom/useTheme";
import Parent from "./Parent";

const ContextHook = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#000" : "#FFF",
        color: theme === "light" ? "#000" : "#FFF",
        paddingBottom: "1em",
      }}
    >
      <Wrapper>
        <h1>useContext() Example</h1>
        <h2>{theme}</h2>
        <Parent />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default ContextHook;
