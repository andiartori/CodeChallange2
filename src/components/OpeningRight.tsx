import React from "react";
import { AboutProps } from "@/utils/interface";

function OpeningRight({ image, about, title }: AboutProps) {
	return (
		<div className="w-full md:mx-9">
			<div className="flex flex-col md:flex-row text-white gap-5">
				{/* Content container, centered vertically and horizontally */}
				<div className="w-full md:w-2/4 flex items-center justify-center text-black text-justify text-lg md:text-xl mt-4 md:mt-0 ml-0 md:ml-9 order-last md:order-first">
					<p className="mx-3 md:mr-28">{about}</p>
				</div>

				{/* Image container with relative positioning */}
				<div className="relative w-full md:w-2/4 text-black">
					<img className="md:object-cover w-full h-full" src={image} alt="No Image Loaded" />

					{/* Coffee text positioned on top of the image */}
					<p className="absolute top-4 left-4 text-white text-6xl">{title}</p>
				</div>
			</div>
		</div>
	);
}

export default OpeningRight;
