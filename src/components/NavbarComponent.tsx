import React, { useState } from "react";
import { NavProps } from "@/utils/interface";
import { useRouter } from "next/router";
import { HiMenu, HiX } from "react-icons/hi"; // Import menu and close icons

function NavbarComponent({ home, about, teams, ourMenus, title }: NavProps) {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	function toAbout() {
		router.push({ pathname: "/about" });
		setIsOpen(false);
	}

	function toHome() {
		router.push({ pathname: "/" });
		setIsOpen(false);
	}

	function toTeams() {
		router.push({ pathname: "/teams" });
		setIsOpen(false);
	}

	function toOurMenus() {
		router.push({ pathname: "/menu" });
		setIsOpen(false);
	}

	// Toggle the burger menu
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex flex-col mt-5  bg-white">
			{/* Title section */}
			<h1 className="flex justify-center text-4xl md:text-6xl font-bold text-black mb-4 items-center">
				{title}
			</h1>

			{/* Navigation section */}
			<nav className="w-full bg-white items-start">
				<div className="container ml-2 mx-auto flex justify-start px-6 py-4 ">
					{/* Desktop Menu */}
					<div className="hidden md:flex gap-10 text-2xl">
						<button
							onClick={toHome}
							className="text-gray-600 px-4 py-2 bg-white hover:text-white hover:bg-amber-950 duration-500"
						>
							{home}
						</button>
						<button
							onClick={toAbout}
							className="text-gray-600 px-4 py-2 bg-white hover:text-white hover:bg-amber-950 duration-500"
						>
							{about}
						</button>
						<button
							onClick={toTeams}
							className="text-gray-600 px-4 py-2 bg-white hover:text-white hover:bg-amber-950 duration-500"
						>
							{teams}
						</button>
						<button
							onClick={toOurMenus}
							className="text-gray-600 px-4 py-2 bg-white hover:text-white hover:bg-amber-950 duration-500"
						>
							{ourMenus}
						</button>
					</div>

					<div className=" mx-1 md:hidden flex justify-end items-center w-full">
						<button
							onClick={toggleMenu}
							className="text-gray-600 hover:text-amber-950 focus:outline-none"
						>
							{isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={`${isOpen ? "block" : "hidden"} md:hidden bg-white w-full`}
				>
					<div className="flex flex-col gap-1 px-6 py-4 text-xl items-center ">
						<button
							onClick={toHome}
							className="w-screen text-gray-600 px-4 py-2 bg-white hover:text-white hover:bg-amber-950 duration-500"
						>
							{home}
						</button>
						<button
							onClick={toAbout}
							className="w-screen text-gray-600 px-4 py-2 bg-white hover:text-white hover:bg-amber-950 duration-500"
						>
							{about}
						</button>
						<button
							onClick={toTeams}
							className="w-screen text-gray-600 px-4 py-2 bg-white hover:text-white hover:bg-amber-950 duration-500"
						>
							{teams}
						</button>
						<button
							onClick={toOurMenus}
							className="w-screen text-gray-600 px-4 py-2 bg-white hover:text-white hover:bg-amber-950 duration-500"
						>
							{ourMenus}
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavbarComponent;
