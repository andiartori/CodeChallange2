import React from "react";

function FooterComponent() {
	return (
		<footer className="bg-black text-white py-8">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
				{/* Company Info */}
				<div className="mb-4 md:mb-0 flex flex-col items-center justify-center">
					<h2 className="md:ml-0 text-xl font-bold">Coffee&Sweets</h2>
					<p>Delicious coffee and sweet treats to brighten your day.</p>
				</div>

				{/* Social Media Links */}
				<div className="flex space-x-4">
					<p>Address : 4th Avenue Cafe Street</p>
					<p>Jakarta</p>
				</div>

				{/* Contact Info */}
				<div className="text-center md:text-right">
					<p>Email: contact@coffeeandsweets.com</p>
					<p>Phone: +123 456 7890</p>
				</div>
			</div>

			{/* Copyright */}
			<div className="text-center mt-8 border-t border-gray-700 pt-4">
				<p>&copy; 2024 Coffee/Sweets. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default FooterComponent;
