import { useState } from "react";
import Content from "./Content";
import Countdown from "./Coundown";

function App() {
  const [lesson, setLesson] = useState(false);
  const [countdown, setCountdown] = useState(false);

  return (
    <div className="App" style={{ padding: 32 }}>
      <button onClick={() => setLesson(!lesson)}>Lesson</button>
      {lesson && <Content />}

      <button onClick={() => setCountdown(!countdown)}>Countdown</button>
      {countdown && <Countdown />}
    </div>
  );
}

export default App;
