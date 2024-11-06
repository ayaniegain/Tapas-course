import { useState } from "react";
import ChildCount from "./Child";

const Parent = () => {
  const [count, setcount] = useState(0);

  let incrementCount = () => {
    setcount(count + 1);
  };

  return (
    <div>
      <h2>parent count {count}</h2>
      <button onClick={incrementCount}>Click from Parent</button>
      <ChildCount count={count} onIncrementCount={incrementCount} />
    </div>
  );
};

export default Parent;
