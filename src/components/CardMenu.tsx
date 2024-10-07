import React from "react";
import { MenuProps } from "@/utils/interface";




function CardMenu({ image, name, description, price }: MenuProps) {
	const formattedPrice = new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0, // No decimal places for Rupiah
	}).format(price);
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
			{/* Image */}
			<img className="w-full h-60 object-cover" src={image} alt={name} />

			{/* Name and Description */}
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{name}</div>
				<p className="text-gray-700 text-base">{description}</p>
			</div>

			{/* Price */}
			<div className="px-6 pt-4 pb-2 flex justify-end">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					{formattedPrice}
				</span>
			</div>
		</div>
	);
}

export default CardMenu;
