import React from "react";

const Banner = ({ bannerImage, silhouette }) => {
	return (
		<div>
			{silhouette ? (
				<img
					className="image"
					src={bannerImage}
					alt="Pokemon Banner"
					draggable="false"
				/>
			) : (
				<img
					className="blackImage"
					src={bannerImage}
					alt="Pokemon Banner"
					draggable="false"
				/>
			)}
		</div>
	);
};

export default Banner;
