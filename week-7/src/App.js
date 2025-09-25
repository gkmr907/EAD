import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Simple React Counter</h1>
      <div className="counter">{count}</div>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}> Increase</button>
        <button onClick={() => setCount(count - 1)}> Decrease</button>
        <button onClick={() => setCount(0)}> Reset</button>
      </div>
    </div>
  );
}

export default App;
