import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) || 0;
  });

  const [step, setStep] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - step);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="container">
        <h1>Advanced Counter App</h1>

        <div className="counter-box">
          <h2>{count}</h2>
        </div>

        <input
          type="number"
          value={step}
          min="1"
          onChange={(e) => setStep(Number(e.target.value))}
          placeholder="Step Value"
        />

        <div className="buttons">
          <button onClick={increment}>➕ Increment</button>
          <button onClick={decrement}>➖ Decrement</button>
          <button onClick={reset}>🔄 Reset</button>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;