import React from "react";
import { AboutProps } from "@/utils/interface";
import { useRouter } from "next/router";

function About({ title, about }: AboutProps) {

	return (
		<div className="flex flex-col items-center mt-10 mb-20 text-justify bg-white w-full">
			<div id="about" className="text-2xl md:text-4xl text-center">
				{title}
			</div>
			<div className="text-l md:text-xl w-full md:w-3/4 mt-10 md:mt-20 px-4">
				{about}
			</div>
		</div>
	);
}

export default About;
