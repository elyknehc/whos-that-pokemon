import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Guess from "./components/Guess";
import "./App.css";
import pokemonImage from "./images/pokeball.jpg";
import axios from "axios";

function App() {
	const [pokemonName, setPokemonName] = useState("");
	const [bannerImage, setBannerImage] = useState("");

	//Generating a random pokemon and retrieving its species name and sprite
	const generatePokemon = () => {
		const randomNumber = Math.floor(Math.random() * 649 + 1);
		fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
			.then((res) => res.json())
			.then(
				(data) => (
					setPokemonName(data.species.name),
					setBannerImage(data.sprites.front_default)
				)
			);
	};

	return (
		<div className="App">
			<Header title="Who's that Pokemon?" />
			<Banner bannerImage={bannerImage} pokemonImage={pokemonImage} />
			<Guess name={pokemonName} generatePokemon={generatePokemon} />
		</div>
	);
}

export default App;
