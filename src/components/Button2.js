import React, { useState, useEffect } from "react";
export default function Button2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count == 5) {
      alert("hello");
    }
  }, [count]);

  function handleCount() {
    setCount(count + 1);
  }
  return (
    <button className="Button2" onClick={handleCount}>
      {count}
    </button>
  );
}
