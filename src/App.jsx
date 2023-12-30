// useState() examples
import StateHook from "./components/usestate/StateHook";
import StateHookObject from "./components/usestate/StateHookObject";

// useSEffect() examples
import EffectHook from "./components/useeffect/EffectHook";
import EffectHookClearUp from "./components/useeffect/EffectHookClearUp";

// useLayoutEffect() example
import LayoutEffect from "./components/uselayouteffect/LayoutEffect";

// useReducer() example
import ReducerHook from "./components/usereducer/ReducerHook";

// useContext() example
import { ThemeProvider } from "./components/usecontext/themeContext";
import ContextHook from "./components/usecontext/ContextHook";

// useRef() example
import RefHookInput from "./components/useref/RefHookInput";
import RefHookDOM from "./components/useref/RefHookDOM";

// useMemo() example
import MemoHook from "./components/usememo/MemoHook";

// useCallback() example
import CallbackHook from "./components/usecallback/CallbackHook";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const App = () => {
  const links = [
    { to: "/", text: "Home" },
    { to: "/useState", text: "useState" },
    { to: "/useEffect", text: "useEffect" },
    { to: "/useLayoutEffect", text: "useLayoutEffect" },
    { to: "/useContext", text: "useContext" },
    { to: "/useReducer", text: "useReducer" },
    { to: "/useRef", text: "useRef" },
    { to: "/useMemo", text: "useMemo" },
    { to: "/useCallback", text: "useCallback" },
  ];

  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1em" }}>
        {links.map((link) => (
          <Link to={link.to} key={link.text}>
            <button>{link.text}</button>
          </Link>
        ))}
      </nav>

      <Routes>
        <Route path="/" exact>
          <Route
            path="/"
            element={
              <h1 style={{ fontSize: "5.4rem", color: "#2e86c1" }}>
                React Hooks
              </h1>
            }
          />
          <Route
            path="/useState"
            element={
              <>
                <StateHook />
                <StateHookObject />
              </>
            }
          />
          <Route
            path="/useEffect"
            exact
            element={
              <>
                <EffectHook />
                <EffectHookClearUp />
              </>
            }
          />
          <Route path="/useLayoutEffect" exact element={<LayoutEffect />} />
          <Route
            path="/useContext"
            exact
            element={
              <ThemeProvider>
                <ContextHook />
              </ThemeProvider>
            }
          />
          <Route path="/useReducer" exact element={<ReducerHook />} />
          <Route
            path="useRef"
            exact
            element={
              <>
                <RefHookInput />
                <RefHookDOM />
              </>
            }
          />
          <Route path="/useMemo" exact element={<MemoHook />} />
          <Route path="/useCallback" exact element={<CallbackHook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
