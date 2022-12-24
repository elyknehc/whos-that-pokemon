import React from "react";
import Banner from "./Banner";
import { useState } from "react";

const Guess = ({ name, generatePokemon, bannerImage }) => {
	//Needs to update if the user types in the right answer
	const [correctGuess, setCorrectGuess] = useState("");
	const [silhouette, setSilhouette] = useState(true);
	const [answer, setAnswer] = useState(true);
	const [streak, setStreak] = useState(0);
	const [showPlayButton, setShowButton] = useState(true);
	const [showRestButtons, setShowRestButton] = useState(false);
	const [pokemonGeneration, setPokemonGeneration] = useState(649);
	// If the play button is clicked, then we show reset buttons
	//const [showButtons, setShowButtons] = useState(false);

	const startGame = () => {
		setShowButton(false);
		generatePokemon(pokemonGeneration);
		setSilhouette(false);
		setShowRestButton(true);
	};
	const resetPokemon = () => {
		generatePokemon();
		setCorrectGuess("");
		setSilhouette(false);
		setAnswer(true);
	};
	const resetInput = (e) => {
		e.target.value = "";
		setCorrectGuess("Correct!");
		setStreak(streak + 1);
		setSilhouette(true);
		setAnswer(true);
	};

	const showAnswer = () => {
		setAnswer(false);
		setSilhouette(true);
		setStreak(0);
	};

	const Reveal = () => {
		setSilhouette(true);
	};

	return (
		<div>
			<Banner bannerImage={bannerImage} silhouette={silhouette} />

			{/* <span>
				{showRestButtons ? (
					<span>
						<button> Generation 1 </button>
						<button> Generation 2 </button>
						<button> Generation 3 </button>
						<button> Generation 4 </button>
						<button> Generation 5 </button>
						<button> Generation 6 </button>
					</span>
				) : null}
			</span> */}

			<span>
				{showRestButtons ? (
					<p className="guessStreak"> Answer Streak: {streak} </p>
				) : null}
			</span>

			<div>
				{showPlayButton ? (
					<button className="playBtn" onClick={startGame}>
						Play
					</button>
				) : null}
			</div>

			<span>
				{showRestButtons ? (
					<button className="btn" onClick={resetPokemon}>
						Reset
					</button>
				) : null}
			</span>

			<span>
				{showRestButtons ? (
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
				) : null}
			</span>

			<h1 className="correct"> {correctGuess}</h1>

			<span>
				{showRestButtons ? (
					<button onClick={Reveal} className="revealBtn">
						Reveal
					</button>
				) : null}
			</span>

			<span>
				{showRestButtons ? (
					<div>
						<button className="ansBtn " onClick={showAnswer}>
							Answer
						</button>
					</div>
				) : null}
			</span>

			{answer ? (
				<div> </div>
			) : (
				<div className="answer"> {name.toUpperCase()}</div>
			)}
		</div>
	);
};

export default Guess;
