import Content2 from "./Content2";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// tạo context
// 1. Create context
// 2. Provider
// 3. Consumer

function Context() {
  const context = useContext(ThemeContext);

  return (
    <div>
      <button onClick={context.ToggleTheme}>Toggle theme</button>
      <Content2 />
    </div>
  );
}

export default Context;
