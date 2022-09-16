import React from "react";
import { useState } from "react";
//Component used to start the game. Conditional rendering.
const Play = ({ startGame }) => {
	const [show, setShow] = useState(true);

	const removeButton = () => {
		startGame();
		setShow(false);
	};
	return (
		<div>
			{show ? (
				<button className="playBtn" onClick={removeButton}>
					Play
				</button>
			) : null}
		</div>
	);
};

export default Play;
