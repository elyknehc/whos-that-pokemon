import React from "react";

const Guess = ({ name, generatePokemon }) => {
	return (
		<div>
			<button className="btn" onClick={generatePokemon}>
				{" "}
				Reset{" "}
			</button>
			<input className="input" placeholder="Make a Guess!" />
			<h1> {name}</h1>
		</div>
	);
};

export default Guess;
