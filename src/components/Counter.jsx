import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  return (
    <section>
      <button onClick={() => setCount(count + 1)}>Öka</button>
      <button onClick={() => setCount(count - 1)}>Minska</button>
      <span id="result">{count}</span>
    </section>
  );
}
