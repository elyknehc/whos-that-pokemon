import React from "react";

const Banner = ({ bannerImage, silhouette }) => {
	return (
		<div>
			{silhouette ? (
				<img className="image" src={bannerImage} alt="Pokemon Banner" />
			) : (
				<img className="blackImage" src={bannerImage} alt="Pokemon Banner" />
			)}
		</div>
	);
};

export default Banner;
