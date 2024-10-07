import React from "react";
import { useQuery } from "@tanstack/react-query";
import { UserData } from "@/utils/interface";
import { getTeamsForSweet } from "@/utils/api";

function SweetTeamComponent() {
	const { data, error, isLoading } = useQuery({
		queryKey: ["getTeamsForSweet"],
		queryFn: getTeamsForSweet,
	});
	console.log(data);

	if (isLoading) {
		return (
			<div>
				<img
					src="https://cdn.dribbble.com/users/637635/screenshots/5745012/loading.gif"
					alt="Loading..."
				/>
			</div>
		);
	}

	// Handle error state
	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			<div className="flex-col items-center justify-center text-black text-justify text-xl ">
				{data?.results?.map((data: UserData, index: number) => (
					<div key={index} className="leading-relaxed my-6">
						{/* Display the image */}
						<p className="inline-flex items-center mb-4 text-black">
							<img
								alt={data.name.first}
								src={data.picture.large}
								className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
							/>
							<span className="flex-grow flex flex-col pl-4">
								<span className="title-font font-medium text-black text-2xl">
									{`${data.name.first} ${data.name.last}`}
								</span>
								<span className="text-black text-xl">{data.email}</span>
							</span>
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default SweetTeamComponent;
