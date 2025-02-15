import React, { Suspense } from "react";
import NavbarComponent from "@/components/NavbarComponent";
import MarqueeComponent from "@/components/MarqueeComponent";
import AboutComponent from "@/components/AboutComponent";
import FooterComponent from "@/components/FooterComponent";
import { dataReview } from "@/utils/datareview";
import { ReviewerProps } from "@/utils/interface";
import Header from "@/components/Header";

const HeroComponent = React.lazy(() => import("@/components/HeroComponent"));
const OpeningLeft = React.lazy(() => import("@/components/OpeningLeft"));
const OpeningRight = React.lazy(() => import("@/components/OpeningRight"));
const TestimonialCards = React.lazy(
	() => import("@/components/TestimonialCards")
);

function HomePage() {
	return (
		<>
			<Header>
				<title>COFFEESWEET-HOME</title>
			</Header>
			<div>
				<div className="overflow-x-hidden">
					{/* //NAVBAR */}
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

					{/* HERO */}

					<div className="mx-0 md:mx-14 my-1.5">
						<Suspense fallback={<div>Loading...</div>}>
							<HeroComponent
								image1="PhotoHero1_1_11zon.jpg"
								image2="PhotoHero2_2_11zon.jpg"
								image3="PhotoHero3_3_11zon.jpg"
							/>
						</Suspense>
						{/* Marquee */}
						<div>
							<MarqueeComponent text="🔴LIVE MUSIC Every Weekend - Jimmi Hendrix [SAT . 05-07-2093] ,  Michael Jackson [SUN . 14-07-2093] , Chrisye [SAT . 21-07-2093] , ⬛️ TO BE ANNNOUNCED [SUN . 27-07-2093]    " />
						</div>
					</div>
					{/* ABOUT */}

					<div className="flex flex-col mx-5 gap-0 md:flex-row mt-10 mb-20">
						{/* About Component */}
						<div className="w-full md:w-1/2 ml-0 md:ml-16">
							<AboutComponent
								title="About 「C  o  f  f  e  e  /  S  w  e  e  t  s」 "
								about="Coffee / Sweets offers a variety of unique and delicious coffee beans, sourced from the best coffee farmers in the region. Our team of expert baristas and chefs will create a tasty and delightful dining experience for your guests."
							/>
						</div>

						{/* What are we selling section */}
						<div className="w-full md:w-1/2 mr-0 md:mr-16 flex flex-col items-center mt-10 mb-20 text-justify">
							<div className="text-2xl sm:text-3xl md:text-4xl mb-10">
								What are we selling?
							</div>
							<div className="text-lg mx-5 md:text-xl mt-10">
								We are selling the best freshly made coffee and sweet bread or
								cake with dedicated attention to quality and taste. Whether
								youre here for a morning pick-me-up or an afternoon treat, our
								cozy atmosphere and delicious offerings make Coffee&Sweets the
								perfect spot to relax and indulge.
							</div>
						</div>
					</div>

					{/* Pembuka Bagian Kiri */}
					<div className="flex flex-col gap-10">
						<div>
							<Suspense fallback={<div>Loading...</div>}>
								<OpeningLeft
									title="COFFEE"
									about="Coffee is a popular beverage made from roasted coffee beans, primarily due to its caffeine content. Coffee is also celebrated for its role in social interactions and as a cultural experience worldwide."
									image="leftOpeningHome_5_11zon.jpg"
								/>
							</Suspense>
						</div>

						{/* Pembuka Bagian Kanan */}
						<div>
							<Suspense fallback={<div>Loading...</div>}>
								<OpeningRight
									title="SWEETS"
									about="Sweet bread is a delightful baked good made from a dough enriched with sugar, butter, and sometimes milk or eggs, creating a soft, fluffy texture and a subtly sweet flavor. Loved for its versatility,making it a cherished part of cultural and culinary traditions worldwide."
									image="rightOpeningHome_4_11zon.jpg"
								/>
							</Suspense>
						</div>
					</div>

					{/* Mapping Data Review */}
					<div>
						<div className="text-gray-600 body-font">
							<div className="container px-5 py-24 mx-auto">
								<h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
									Testimonials / Reviews
								</h1>

								<div className="className= grid grid-cols-1 md:grid-cols-3 gap-6">
									{dataReview.map((data: ReviewerProps, index: number) => {
										return (
											<Suspense key={index} fallback={<div>Loading...</div>}>
												<TestimonialCards
													name={data.name}
													text={data.text}
													reviewerPhoto={data.reviewerPhoto}
												/>
											</Suspense>
										);
									})}
								</div>
							</div>
						</div>
					</div>

					{/* FOOTER */}
					<div className="mt">
						<FooterComponent />
					</div>
				</div>
			</div>
		</>
	);
}

export default HomePage;
