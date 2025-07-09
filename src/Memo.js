import { useState, memo, useCallback } from "react";
import Text from "./Text";

// 1. memo() => Higher Order Component (HOC)

function Memo() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Text onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default Memo;
