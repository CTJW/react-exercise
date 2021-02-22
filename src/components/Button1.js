import { useState } from "react";
export default function Button1() {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }
  return (
    <button className="Button1" onClick={handleCount}>
      {count}
    </button>
  );
}
