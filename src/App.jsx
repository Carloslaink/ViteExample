import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
	const [count, setCount] = useState(100);
	const [name, setName] = useState(null);
	const [count2, setCount2] = useState(0);
	const [show, setShow] = useState(false);

	console.log("sin useEffect");
	useEffect(() => {
		console.log(`con useEffect 1 ${name}`);
	}, [name]);

	const handleClick = () => {
		setCount2((state) => state + 1);
		setCount(count + 1);
	};

	return (
		<>
			Name: {show && <h1>{name}</h1>}
			<h2>count: {count}</h2>
			<h2>count2: {count2}</h2>
			<button onClick={handleClick}>Click</button>
			<button
				onClick={() => setName(name === "Over" ? "Antho" : "Over")}
			>
				Change name
			</button>
			<button onClick={() => setShow((state) => !state)}>Toggle name</button>
		</>
	);
}