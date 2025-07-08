import { useState } from "react";
import Content from "./Content";
import Countdown from "./Coundown";
import Width from "./Size";
import Image from "./Image";
import Data from "./Data";
import Count from "./Count";

function App() {
  const [lesson, setLesson] = useState(false);
  const [countdown, setCountdown] = useState(false);
  const [width, setWidth] = useState(false);
  const [img, setImg] = useState(false);
  const [tab, setTab] = useState(false);
  const [count, setCount] = useState(false);

  return (
    <div className="App" style={{ padding: 32 }}>
      <button onClick={() => setLesson(!lesson)}>Lesson</button>
      <button onClick={() => setCountdown(!countdown)}>Countdown</button>
      <button onClick={() => setWidth(!width)}>Width</button>
      <button onClick={() => setImg(!img)}>Image</button>
      <button onClick={() => setTab(!tab)}>Tabs</button>
      <button onClick={() => setCount(!count)}>Count</button>

      {lesson && <Content />}
      {countdown && <Countdown />}
      {width && <Width />}
      {img && <Image />}
      {tab && <Data />}
      {count && <Count />}
    </div>
  );
}

export default App;
