import React from "react";
import { useState } from "react";

const Guess = ({ name, generatePokemon }) => {
	//Needs to update if the user types in the right answer
	const [correctGuess, setCorrectGuess] = useState("");
	const resetPokemon = () => {
		generatePokemon();
		setCorrectGuess("");
	};
	const resetInput = (e) => {
		e.target.value = "";
		setCorrectGuess("Correct!");
	};
	return (
		<div>
			<button className="btn" onClick={resetPokemon}>
				Reset
			</button>
			<input
				type="text"
				className="input"
				placeholder="Make a Guess!"
				onChange={(e) =>
					e.target.value.toLowerCase() === name
						? resetInput(e)
						: setCorrectGuess("")
				}
			/>
			<h1 className="correct"> {correctGuess}</h1>
		</div>
	);
};

export default Guess;
