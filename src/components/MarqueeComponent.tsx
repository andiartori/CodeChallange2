import React from "react";
import { MarqueeProps } from "@/utils/interface";

const Marquee = ({ text }: MarqueeProps) => {
	return (
		<div className="overflow-hidden whitespace-nowrap">
			<div className="inline-block animate-marquee">
				<p className="text-2xl text-black font-bold">{text}</p>

			</div>
		</div>
	);
};

export default Marquee;
