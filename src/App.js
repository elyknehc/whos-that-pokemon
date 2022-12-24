import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Guess from "./components/Guess";
import "./App.css";
import pokemonImage from "./images/pokeball.jpg";

function App() {
	const [pokemonName, setPokemonName] = useState("");
	const [bannerImage, setBannerImage] = useState(pokemonImage);
	const [generation, setGeneration] = useState();

	//const [loading, setLoading] = useState(false);

	//Generating a random pokemon and retrieving its species name and sprite
	const generatePokemon = async (generation = 649) => {
		const randomNumber = Math.floor(Math.random() * generation + 1);
		try {
			fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
				.then((res) => res.json())
				.then(
					(data) => (
						setPokemonName(data.species.name),
						setBannerImage(data.sprites.front_default)
					)
				);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="App">
			<Header title="Who's that Pokemon?" />

			<Guess
				name={pokemonName}
				generatePokemon={generatePokemon}
				bannerImage={bannerImage}
			/>
			<Footer />
		</div>
	);
}

export default App;
