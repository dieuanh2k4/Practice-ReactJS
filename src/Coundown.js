import { useEffect, useState } from "react";

function Countdown() {
  const [count, setCount] = useState(200);

  console.log(count);

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Countdown;
