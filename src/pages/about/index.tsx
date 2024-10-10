import React, { Suspense } from "react";
import NavbarComponent from "@/components/NavbarComponent";
import { useRouter } from "next/router";
import FooterComponent from "@/components/FooterComponent";
import Header from "@/components/Header";
const OpeningLeft = React.lazy(() => import("@/components/OpeningLeft"));

function About() {
	const router = useRouter();
	function toTeams() {
		router.push({ pathname: "/teams" });
	}

	return (
		<>
		<div className="overflow-x-hidden">
		<Header>
				<title>COFFEESWEET-ABOUT</title>
			</Header>
			<div>
				<div className="mt-8 md:mt-0">
					<NavbarComponent
						home="Home"
						about="About"
						teams="Teams"
						ourMenus="OurMenus"
						title="「C  o  f  f  e  e  /  S  w  e  e  t  s」"
						contact="reserved"
					/>
				</div>

				<div
					className="md:mx-10 flex flex-col items-center mt-10 md:mt-32 mb-10 text-justify h-96 object-fill"
					style={{
						backgroundImage: `url(https://img.freepik.com/free-photo/cup-coffee-with-roasted-coffee-beans_23-2150698823.jpg)`,
						backgroundPosition: "center"
					}}
				>
					<div className="text-4xl text-white mt-5 md:mt-16">
						Our History in Detail
					</div>
					<div className="text-2xl mx-5 p-5 mt-14 text-white text-justify">
						<a
							href="#slider"
							className="text-black col-span-4 px-5 py-4 bg-slate-200 text-xl hover:text-white hover:bg-amber-950 duration-500"
						>
							EMBARK ON A JOURNEY
						</a>
					</div>
				</div>

				<div
					className="text-2xl sm:text-3xl text-black mt-40 flex justify-center md:justify-center"
					id="slider"
				>
					Where Do We Come From ?
				</div>
				<div className=" mx-0 md:mt-5 bg-slate-200 md:mx-10 hover: transition ease-in-out delay-150  ">
					<div className="mx-5 overflow-x-auto snap-x snap-mandatory scroll-pl-6 scroll-smooth mt-10 md:mx-10">
						<div className="flex space-x-4 items-center ">
							<div className=" snap-center shrink-0 w-full md:snap-center md:shrink-0 md:w-1/2 m-5 hover:-translate-y-1 ">
								<img
									src="About1_1_11zon.jpg"
									alt="No IMAGE LOADED"
									className="w-[300px] h-[200] object-cover hover:scale-110 ease-in duration-300"
								/>

								<h3 className="text-3xl mt-5">18XX</h3>
								<p className=" mx-0 mr-0 md:text-l text-justify md:mr-20">
									Our history of coffee shop is starting from the most
									unbeliavble way the great-great grand-father of barbara
									started on a journey to find a new hope Armed with nothing but
									a love for coffee and a few heirloom recipes passed down
									through generations, he traveled across continents,
									discovering the finest coffee beans in remote plantations.
									Along the way, he learned the art of roasting, blending, and
									brewing from the local coffee masters.
								</p>

								<h2 className="mt-44 text-2xl">SLIDE TO RIGHT TO KNOW MORE!</h2>
							</div>

							<div className="snap-center shrink-0 w-full md:snap-center md:shrink-0 md:w-1/2 m-5 ">
								<img
									src="About2_2_11zon.jpg"
									alt="No IMAGE LOADED"
									className="w-[300px] h-[200] object-cover hover:scale-110 ease-in duration-300"
								/>
								<h3 className="text-3xl mt-5">1965</h3>
								<p className="text-l text-justify mr-20">
									in a quiet town far from the bustling cities her ancestors
									once roamed. Barbara Schreader, the forgotten
									great-great-granddaughter of the legendary Mr. Olympius
									Schreader, had always been drawn to books and history rather
									than the familys famed legacy in the coffee business. Lost in
									stories of adventure, discovery, and forgotten traditions. But
									destiny has a way of catching up with those who run from it.
								</p>
							</div>
							<div className="snap-center shrink-0 w-full md:snap-center md:shrink-0 md:w-1/2 m-5">
								<img
									src="About3_3_11zon.jpg"
									alt="No IMAGE LOADED"
									className="w-[300px] h-[200] object-cover hover:scale-110 ease-in duration-300 "
								/>
								<h3 className=" text-3xl mt-5">1989</h3>
								<p className="text-l text-justify mr-20">
									In 1989, Barbara and her son, Christoph, decided to return to
									the familys roots. They both immersed themselves in the world
									of coffee, learning about roasting, brewing, and sourcing the
									finest beans. With high hopes and Barbaras passion for
									honoring her great-great-grandfathers legacy, they opened a
									cozy little coffee shop in their hometown. However, despite
									their hard work and dedication, the business struggled.
								</p>
							</div>
							<div className="snap-center shrink-0 w-full md:snap-center md:shrink-0 md:w-1/2 m-10">
								<img
									src="About4_4_11zon.jpg"
									alt="No IMAGE LOADED"
									className="w-[300px] h-[200] object-fit hover:scale-110 ease-in duration-300 "
								/>
								<h3 className=" text-3xl mt-5">1999</h3>
								<p className="text-l text-justify mr-20">
									In 1999, after a long and fulfilling journey, Barbara passed
									away peacefully. Her departure marked the end of an era for
									the beloved Coffee&Sweets, and with a heavy heart, The
									memories of Barbaras coffee legacy and Christophs sweet breads
									lived on, but the café itself became a silent monument to
									their efforts. But now they are selling pepsi it closed after
									6 month
								</p>
							</div>
							<div className="snap-center shrink-0 w-full md:snap-center md:shrink-0 md:w-1/2 m-10">
								<img
									src="About5_5_11zon.jpg"
									alt="No IMAGE LOADED"
									className="w-[300px] h-[200] object-cover hover:scale-110 ease-in duration-300"
								/>
								<h3 className=" text-3xl mt-5">2005</h3>
								<p className="text-l text-justify mr-20">
									In 2005, Eren Schreader, Christoph Jr.s son, decided it was
									time to breathe new life into the old family building. Growing
									up, Eren had heard countless stories about the legacy of
									Coffee&Sweets from his father and grandfather. hence opening
									eren & drinken
								</p>
							</div>
							<div className="snap-center shrink-0 w-full md:snap-center md:shrink-0 md:w-1/2 m-10">
								<img
									src="About6_6_11zon.jpg"
									alt="No IMAGE LOADED"
									className="w-[300px] h-[200] object-cover hover:scale-110 ease-in duration-300"
								/>
								<h3 className=" text-3xl mt-5">2024</h3>
								<p className="text-l text-justify mr-20">
									In 2024, founding again the books of journey from Barbara and
									its her ancestors, Eren son, Horus, change again to its roots
									and making the Coffee and Sweets opening until now.
								</p>
								<a href="#leader">
									<h2 className="hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 m-3 p-2 flex justify-center">
										LIKE TO KNOW MORE ABOUT THE OWNER ?
									</h2>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="mx-10 flex flex-col items-center mt-10 mb-5 text-justify">
					<div className="text-4xl" id="leader">
						Our Leader
					</div>
				</div>

				<div className=" m-0 md:m-20 h-auto object-fill overflow-hidden">
					<Suspense fallback={<div>Loading...</div>}>
						<OpeningLeft
							title={
								<span>
									Mr. H
									<span
										onClick={() => router.push("/login")}
										className="cursor-pointer"
									>
										o
									</span>
									rus
								</span>
							}
							about="Horus Schreader is the dynamic and visionary force behind the success of Eren & Drinken, the café-bar hybrid that has redefined the Schreader family legacy. A natural leader with a keen eye for business and innovation, Horus is known for his ability to merge tradition with modern trends. He brings a unique energy to the business, driving it forward with a deep respect for his family's rich history in coffee and an unwavering dedication to creating a space where people can connect and unwind."
							image="AboutHorus_7_11zon.jpg"
						/>
					</Suspense>
					<div className="flex justify-end mx-10">
						<button onClick={toTeams}>
							<h2 className="hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 m-3 p-2 flex justify-center text-2xl">
								Would you like to see our Barista & Baker ?
							</h2>
						</button>
					</div>
				</div>
				<div className="mt-20">
					<FooterComponent />
				</div>
			</div>
		</div>

		</>
	);
}

export default About;
