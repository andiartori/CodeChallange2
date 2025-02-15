import { useRouter } from "next/router";
import { useState } from "react";
import React, { FormEvent } from "react";

export default function Login() {
	const router = useRouter();
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);

	const handleLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password === "admin") {
			setIsSuccess(true);
			setTimeout(() => {
				router.push("/listMenu");
			}, 3000);
		} else {
			setError(
				"Incorrect password! ,  you will shortly prompted to About Page"
			);
			setTimeout(() => {
				router.push("/about");
			}, 2000);
		}
	};

	if (isSuccess) {
		return (
			<div className="flex justify-center items-center h-screen">
				<img src="OpenTheDoor.jpg" alt="Success" />
				<div>
					<h1>PLEASE COME IN...</h1>
				</div>
			</div>
		);
	}

	return (
		<div className="flex justify-center items-center h-screen">
			<div>
				<img src="Security.jpg" alt="Welcome" />
			</div>
			<div className="w-full max-w-xs">
				<form
					onSubmit={handleLogin}
					className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				>
					<h1 className="mb-4 text-xl">
						Welcome Mr. Horus, may I have your password?
					</h1>
					<div className="mb-4">
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					{error && <p className="text-red-500 text-xs italic">{error}</p>}
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
