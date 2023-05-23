// app2.jsx
import React from "react";
import "./App.css";
import { Counter } from "./components/counter";

export default function App2() {
	return (
		<>
			<h1>My App</h1>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
				cupiditate!
			</p>
			<Counter initialCount={500} />
		</>
	);
}