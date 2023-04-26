import React from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
	function allNewDice() {
		const newDice = [];

		for (let i = 0; i < 10; i++) {
			newDice.push({
				value: Math.ceil(Math.random() * 6),
				isHeld: false,
				id: nanoid(),
			});
		}
		return newDice;
	}

	const [dice, setDice] = React.useState(allNewDice());

	// console.log(allNewDice());

	const diceELements = dice.map((die) => (
		<Die key={die.id} value={die.value} />
	));

	function rollDice() {
		setDice(allNewDice());
	}

	return (
		<main className="game-window">
			<div className="dice-container">{diceELements}</div>
			<button onClick={rollDice} className="roll-dice">
				Roll
			</button>
		</main>
	);
}

export default App;
