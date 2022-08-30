/** @jsx h */
import { h } from 'preact';

import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Counter(props) {
  const [count, setCount] = useState(props.start);
  return (
    <div>
      <p>{count}</p>
      <button class="btn" onClick={() => setCount(count - 1)} disabled={!IS_BROWSER}>
        -1
      </button>
      <button class="btn" onClick={() => setCount(count + 1)} disabled={!IS_BROWSER}>
        +1
      </button>
    </div>
  );
}
