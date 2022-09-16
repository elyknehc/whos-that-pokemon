import React from "react";
import Play from "./Play";
import Banner from "./Banner";
import { useState } from "react";

const Guess = ({ name, generatePokemon, bannerImage }) => {
	//Needs to update if the user types in the right answer
	const [correctGuess, setCorrectGuess] = useState("");
	const [silhouette, setSilhouette] = useState(false);
	const [answer, setAnswer] = useState(true);
	// If the play button is clicked, then we show reset buttons
	//const [showButtons, setShowButtons] = useState(false);

	const resetPokemon = () => {
		generatePokemon();
		setCorrectGuess("");
		setSilhouette(false);
		setAnswer(true);
	};
	const resetInput = (e) => {
		e.target.value = "";
		setCorrectGuess("Correct!");
		setSilhouette(true);
		setAnswer(true);
	};

	const showAnswer = () => {
		setAnswer(false);
		setSilhouette(true);
	};

	return (
		<div>
			<Banner bannerImage={bannerImage} silhouette={silhouette} />

			<Play startGame={generatePokemon}></Play>

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

			<button className="ansBtn " onClick={showAnswer}>
				Answer
			</button>
			{answer ? (
				<div className="hidden">{name}!</div>
			) : (
				<div className="answer"> {name.toUpperCase()}</div>
			)}
		</div>
	);
};

export default Guess;
