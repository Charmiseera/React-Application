import { useState } from "react";

export default function App() {
  // Calculator state
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState();

  function handleSubmit() {
    setResult(num1 + num2);
    setNum1(0);
    setNum2(0);
  }

  // Counter state
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Calculator</h1>
      <input
        type="number"
        placeholder="Number 1"
        onChange={(e) => setNum1(Number(e.target.value))}
        value={num1}
      />
      <input
        type="number"
        placeholder="Number 2"
        onChange={(e) => setNum2(Number(e.target.value))}
        value={num2}
      />
      <button onClick={handleSubmit}>Add</button>
      {result !== undefined && <p>Result: {result}</p>}

      <hr />

      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
