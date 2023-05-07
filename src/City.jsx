import React from "react";

const City = ({ city }) => {
	return city ? (
		<div className="flex flex-col justify-center text-center pt-4">
			<p className="font-poppins text-3xl my-2 text-gray-200">
				{city.name} | {city.sys.country}
			</p>
			<p className="font-poppins text-gray-200 text-3xl m-2">{Math.floor(city.main.temp)}°C Derece</p>
		</div>
	) : null;
};

export default City;