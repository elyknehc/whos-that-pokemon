import React from "react";

const Banner = ({ bannerImage }) => {
	return (
		<div>
			<img className="image" src={bannerImage} alt="Pokemon Banner" />
		</div>
	);
};

export default Banner;
