function ChildCount({ count, onIncrementCount }) {
  return (
    <div>
      <h2> child count {count}</h2>
      <button onClick={onIncrementCount}>Click from child</button>
    </div>
  );
}

export default ChildCount;
