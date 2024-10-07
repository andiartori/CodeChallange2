import React from "react";
import { HeroProps } from "@/utils/interface";

function HeroComponent({ image1, image2, image3 }: HeroProps) {
	return (
		<div className="grid grid-cols-6 grid-rows-6 gap-4 h-[70vh]">
			{/* Main image with tagline */}
			<div
				className="col-span-6 md:col-span-4 row-span-6 bg-cover bg-center relative"
				style={{ backgroundImage: `url(${image1})` }}
			>
				<div className="w-60 md:w-2/5 my-5 bg-white rounded p-2">
					<h1 className="text-xl md:text-3xl font-bold p-1">
						&quot;The Best Coffee and Sweets in Town&quot;
					</h1>
				</div>
			</div>

			{/* Smaller images (hidden on mobile) */}
			<div
				className="hidden md:block col-span-2 row-span-3 col-start-5 bg-cover bg-center"
				style={{ backgroundImage: `url(${image2})` }}
			>
				{/* Add content if necessary */}
			</div>

			<div
				className="hidden md:block col-span-2 row-span-3 col-start-5 row-start-4 bg-cover bg-center"
				style={{ backgroundImage: `url(${image3})` }}
			>
				{/* Add content if necessary */}
			</div>
		</div>
	);
}

export default HeroComponent;
