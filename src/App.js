import { useState } from "react";
import Content from "./Content";
import Countdown from "./Coundown";
import Width from "./Size";
import Image from "./Image";

function App() {
  const [lesson, setLesson] = useState(false);
  const [countdown, setCountdown] = useState(false);
  const [width, setWidth] = useState(false);
  const [img, setImg] = useState(false);

  return (
    <div className="App" style={{ padding: 32 }}>
      <button onClick={() => setLesson(!lesson)}>Lesson</button>
      <button onClick={() => setCountdown(!countdown)}>Countdown</button>
      <button onClick={() => setWidth(!width)}>Width</button>
      <button onClick={() => setImg(!img)}>Image</button>

      {lesson && <Content />}
      {countdown && <Countdown />}
      {width && <Width />}
      {img && <Image />}
    </div>
  );
}

export default App;
