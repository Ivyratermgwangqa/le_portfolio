// src/app/page.tsx
"use client"; // Explicitly mark this as a Client Component

import React, { useState } from "react";
import Button from "../components/Button"; // Import the Button component

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0); // State to track counter

  // Event handler for button click
  const handleClick = () => {
    setCount(count + 1); // Increment the count
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to My Portfolio</h1>
      <p>Click the button to increment the counter:</p>

      <h2>Counter: {count}</h2>

      {/* Passing the event handler to Button */}
      <Button text="Click Me" onClick={handleClick} variant="primary" size="medium" />
    </div>
  );
};

export default HomePage;
