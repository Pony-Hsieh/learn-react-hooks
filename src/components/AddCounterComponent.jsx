import { useState } from "react";

export default function AddCounterComponent() {
  console.log("render AddCounterComponents");
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Add Counter Component</h3>
      <p>counter: {counter}</p>
      <button
        type="button"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        click to add counter
      </button>
    </div>
  );
}
