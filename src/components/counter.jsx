// components/counter.jsx
import React, { useState } from "react";

export function Counter({ initialCount }) {
	const [count, setCount] = useState(initialCount || 0);

	return (
		<>
			<h3>This is counter</h3>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</>
	);
}