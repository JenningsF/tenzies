import React from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Confetti from "react-confetti";
import Die from "./components/Die";
import Footer from "./components/Footer";

function App() {
    const [dice, setDice] = React.useState(allNewDice());
    const [tenzies, setTenzies] = React.useState(false);

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue);
        if (allHeld && allSameValue) {
            setTenzies(true);
            console.log("You won!");
        }
    }, [dice])

    function generateNewDie() {
        return {
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
        }
    }

	function allNewDice() {
		const newDice = [];

		for (let i = 0; i < 10; i++) {
			newDice.push(generateNewDie());
		}
		return newDice;
	}

	function rollDice() {
        setDice( oldDice => oldDice.map(die => {
            return die.isHeld ?
                die :
                generateNewDie()
        }));
	}

    function startNewGame() {
        setDice(allNewDice());
        setTenzies(false);
    }

    function holdDie(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ?
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceELements = dice.map(die => (
        <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDie={() => holdDie(die.id)} />
    ));

	return (
		<main className="game-window">
            {tenzies ? <Confetti numberOfPieces={500} recycle={false} /> : ""}
			<h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same.
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">{diceELements}</div>
			<button onClick={tenzies ? startNewGame : rollDice} className="roll-dice">
				{tenzies ? "New Game" : "Roll"}
			</button>
            <Footer />
		</main>
	);
}

export default App;
