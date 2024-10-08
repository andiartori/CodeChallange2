import React, { Suspense } from "react";
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import Header from "@/components/Header";
const CoffeeTeamComponent = React.lazy(
	() => import("@/components/CoffeeTeamComponent")
);
const SweetTeamComponent = React.lazy(
	() => import("@/components/SweetTeamComponent")
);

function Teams() {
	return (
		<>
			<Header>
				<title>COFFEESWEET-TEAMS</title>
			</Header>
			<div>
				<div className="mt-8 md:mt-0">
					<NavbarComponent
						home="Home"
						about="About"
						teams="Teams"
						ourMenus="OurMenus"
						title="「C  o  f  f  e  e  /  S  w  e  e  t  s」  "
						contact="reserved"
					/>
				</div>
				<div className="w-full flex justify-center md:justify-center">
					<div className="flex flex-col items-center mt-5 mb-10 text-justify w-full sm:w-3/4 md:w-1/2 sm:px-4 md:mx-10">
						<div className="text-3xl sm:text-4xl">Meet Our Barista & Chefs</div>
						<div className="text-lg sm:text-xl mt-5 sm:mt-10 mx-5 sm:mx-4">
							<p>
								Our Barista & chef has more than 10 years of experience making
								coffee, crafting each cup with precision and passion. Together,
								they ensure that every visit to Coffee & Sweets is not just a
								treat for the taste buds, but a moment to savor and enjoy.
							</p>
						</div>
					</div>
				</div>

				<div className="ml-0 md:ml-56 mb-10">
					<div className=" grid-cols-1 md:grid md:grid-cols-2 grid-rows-2 gap-4">
						<div className="  md:row-span-2">
							<h1 className="absolute text-2xl m-5 p-2 text-black bg-white">
								BARISTA
							</h1>
							<img
								src="https://images.unsplash.com/photo-1513430698680-03ff4d6be961?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJhcmlzdGF8ZW58MHx8MHx8fDA%3D"
								alt="Barista"
							/>
						</div>
						<div className="ml-6 md:row-span-2 mr-56">
							<Suspense fallback={<div>Loading Data</div>}>
								<CoffeeTeamComponent />
							</Suspense>
						</div>
					</div>
				</div>

				<div className="ml-0 md:ml-56">
					<div className=" grid-cols-1 md:grid md:grid-cols-2 grid-rows-2 gap-4">
						<div className="  md:row-span-2">
							<h1 className="absolute text-2xl m-5 p-2 text-black bg-white">
								BAKER
							</h1>
							<img
								src="https://images.unsplash.com/photo-1600961459395-62759980991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNoZWZ8ZW58MHx8MHx8fDA%3D"
								alt="BAKER"
							/>
						</div>
						<div className="ml-6 md:row-span-2 mr-56">
							<Suspense fallback={<div>Loading Data</div>}>
								<SweetTeamComponent />
							</Suspense>
						</div>
					</div>
				</div>

				<div className="mt-32">
					<FooterComponent />
				</div>
			</div>
		</>
	);
}

export default Teams;
