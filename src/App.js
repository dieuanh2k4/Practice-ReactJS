import { useState } from "react";
import Content from "./Content";
import Countdown from "./Coundown";
import Width from "./Size";

function App() {
  const [lesson, setLesson] = useState(false);
  const [countdown, setCountdown] = useState(false);
  const [width, setWidth] = useState(false);

  return (
    <div className="App" style={{ padding: 32 }}>
      <button onClick={() => setLesson(!lesson)}>Lesson</button>
      <button onClick={() => setCountdown(!countdown)}>Countdown</button>
      <button onClick={() => setWidth(!width)}>Width</button>

      {lesson && <Content />}
      {countdown && <Countdown />}
      {width && <Width />}
    </div>
  );
}

export default App;
