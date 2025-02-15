import React, { Suspense } from "react";
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import { useQuery } from "@tanstack/react-query";
import { getAllEntries } from "@/utils/api";
import { EntryA, Asset } from "@/utils/interface";
import Header from "@/components/Header";

const spaceId = "77u4ydaftcug";
const environmentId = "master";

const CardMenu = React.lazy(() => import("@/components/CardMenu"));

function Menu() {
	const { data, error, isLoading } = useQuery({
		queryKey: ["getAllEntries", spaceId, environmentId],
		queryFn: () => getAllEntries({ spaceId, environmentId }),
	});

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<img src="/Loading-min.gif" alt="Loading..." />
			</div>
		);
	}

	if (error instanceof Error) {
		return <div>Error: {error.message}</div>;
	}

	const coffeeItems =
		data?.items?.filter((entry: EntryA) =>
			entry.fields.category.includes("coffee")
		) || [];

	const sweetItems =
		data?.items?.filter((entry: EntryA) =>
			entry.fields.category.includes("sweet")
		) || [];

	return (
		<>
			<Header>
				<title>COFFEESWEET-MENU</title>
			</Header>
			<div>
				<div>
					<NavbarComponent
						home="Home"
						about="About"
						teams="Teams"
						ourMenus="OurMenus"
						title="「C  o  f  f  e  e  /  S  w  e  e  t  s」"
						contact="reserved"
					/>
				</div>

				{/* Map through coffeeItems */}

				<div className="w-full flex justify-center md:justify-center">
					<div className="flex flex-col items-center mt-5 mb-10 text-justify w-full sm:w-3/4 md:w-1/2 sm:px-4 md:mx-10">
						<div className="text-3xl sm:text-4xl">Coffee</div>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mx-10">
					{coffeeItems.map((entry: EntryA) => {
						const asset = data.includes.Asset.find(
							(a: Asset) => a.sys.id === entry.fields.image.sys.id
						);
						const imageUrl = asset?.fields?.file?.url
							? `https:${asset.fields.file.url}`
							: "";

						return (
							<Suspense
								key={entry.sys.id}
								fallback={<div>Loading Data ... </div>}
							>
								<CardMenu
									image={imageUrl}
									name={entry.fields.name}
									description={entry.fields.description}
									price={entry.fields.price}
								/>
							</Suspense>
						);
					})}
				</div>

				<div className="w-full flex justify-center md:justify-center">
					<div className="flex flex-col items-center mt-5 mb-10 text-justify w-full sm:w-3/4 md:w-1/2 sm:px-4 md:mx-10">
						<div className="text-3xl sm:text-4xl">Sweets</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mx-10">
					{sweetItems.map((entry: EntryA) => {
						const asset = data.includes.Asset.find(
							(a: Asset) => a.sys.id === entry.fields.image.sys.id
						);
						const imageUrl = asset?.fields?.file?.url
							? `https:${asset.fields.file.url}`
							: "";

						return (
							<Suspense
								key={entry.sys.id}
								fallback={<div>Loading Data ... </div>}
							>
								<CardMenu
									image={imageUrl}
									name={entry.fields.name}
									description={entry.fields.description}
									price={entry.fields.price}
								/>
							</Suspense>
						);
					})}
				</div>

				<div className="mt-20">
					<FooterComponent />
				</div>
			</div>
		</>
	);
}

export default Menu;
