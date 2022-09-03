import React from "react";

const Guess = ({ name, generatePokemon }) => {
	//Needs to update if the user types in the right answer
	const [correctGuess, setCorrectGuess] = ["hi"];
	return (
		<div>
			<button className="btn" onClick={generatePokemon}>
				Reset
			</button>
			<input
				type="text"
				className="input"
				placeholder="Make a Guess!"
				onChange={(e) =>
					e.target.value === name ? setCorrectGuess("Correct!") : null
				}
			/>
			<h1> {correctGuess}</h1>

			<h1> {name}</h1>
		</div>
	);
};

export default Guess;
