function ChildCount({ count, onIncrementCount }) {
  return (
    <div>
      <h2> child count {count}</h2>
      <button onClick={onIncrementCount}>Child Count</button>
    </div>
  );
}

export default ChildCount;
