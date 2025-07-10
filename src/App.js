import { useState } from "react";
import Content from "./Content";
import Countdown from "./Coundown";
import Width from "./Size";
import Image from "./Image";
import Data from "./Data";
import Count from "./Count";
import Count2 from "./Count2";
import Memo from "./Memo";
import UseMemo from "./UseMemo";
import UseReducer from "./UseReducer";
import Todo from "./Todo";
import Context from "./Context";

function App() {
  const [lesson, setLesson] = useState(false);
  const [countdown, setCountdown] = useState(false);
  const [width, setWidth] = useState(false);
  const [img, setImg] = useState(false);
  const [tab, setTab] = useState(false);
  const [count, setCount] = useState(false);
  const [count2, setCount2] = useState(false);
  const [memo, setMemo] = useState(false);
  const [useMemo, setUseMemo] = useState(false);
  const [useReducer, setUseReducer] = useState(false);
  const [todo, setTodo] = useState(false);
  const [context, setContext] = useState(false);

  return (
    <div className="App" style={{ padding: 32 }}>
      <button onClick={() => setLesson(!lesson)}>Lesson</button>
      <button onClick={() => setCountdown(!countdown)}>Countdown</button>
      <button onClick={() => setWidth(!width)}>Width</button>
      <button onClick={() => setImg(!img)}>Image</button>
      <button onClick={() => setTab(!tab)}>Tabs</button>
      <button onClick={() => setCount(!count)}>Count</button>
      <button onClick={() => setCount2(!count2)}>Count2</button>
      <button onClick={() => setMemo(!memo)}>Memo</button>
      <button onClick={() => setUseMemo(!useMemo)}>UseMemo</button>
      <button onClick={() => setUseReducer(!useReducer)}>UseReducer</button>
      <button onClick={() => setTodo(!todo)}>Todo</button>
      <button onClick={() => setContext(!context)}>Context</button>

      {lesson && <Content />}
      {countdown && <Countdown />}
      {width && <Width />}
      {img && <Image />}
      {tab && <Data />}
      {count && <Count />}
      {count2 && <Count2 />}
      {memo && <Memo />}
      {useMemo && <UseMemo />}
      {useReducer && <UseReducer />}
      {todo && <Todo />}
      {context && <Context />}
    </div>
  );
}

export default App;
