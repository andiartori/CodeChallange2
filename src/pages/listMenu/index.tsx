import React from "react";
import NavbarComponent from "@/components/NavbarComponent";
import Header from "@/components/Header";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
	getAllEntries,
	deleteMenuEntries,
	addAndPublishMenuEntry,
} from "@/utils/api";
import { Entry } from "@/utils/interface";
import { useState } from "react";
import Swal from "sweetalert2";

// BUKAN Token, tidak dijadikan env
const spaceId = "77u4ydaftcug";
const environmentId = "master";

function ListMenu() {
	// Capitalize the function name
	const queryClient = useQueryClient();

	const { data, error, isLoading } = useQuery({
		queryKey: ["getAllEntries", spaceId, environmentId],
		queryFn: () => getAllEntries({ spaceId, environmentId }),
	});

	const [newMenu, setNewMenu] = useState({
		name: "",
		description: "",
		price: "",
		category: "coffee", // Default category
		isAvailable: false,
		imageId: "",
	});

	// Untuk menambahkan ke ContentFul
	const addMenuMutation = useMutation({
		mutationFn: async () => {
			const { name, description, price, category, isAvailable, imageId } =
				newMenu;
			await addAndPublishMenuEntry(spaceId, environmentId, {
				name,
				description,
				price: Number(price), // Convert price to a number
				category: [category],
				isAvailable,
				imageId,
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["getAllEntries", spaceId, environmentId],
			});
			Swal.fire("Success", "Menu item added successfully", "success");
			setNewMenu({
				name: "",
				description: "",
				price: "",
				category: "coffee",
				isAvailable: true,
				imageId: "",
			});
		},
		onError: () => {
			Swal.fire("Error", "There was an issue adding the menu item", "error");
		},
	});

	// Untuk Menghapus di Contentful
	const deleteMenuMutation = useMutation({
		mutationFn: async (entryId: string) => {
			return await deleteMenuEntries(entryId, spaceId, environmentId);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["getAllEntries", spaceId, environmentId],
			});
		},
	});

	console.log(data);

	const handleDelete = (entryId: string) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				// Call the delete mutation function if confirmed
				deleteMenuMutation.mutate(entryId);
				Swal.fire("Deleted!", "Your entry has been deleted.", "success");
			}
		});
	};

	// handle input yang ada di FORM
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value, type } = e.target;

		if (type === "checkbox") {
			const target = e.target as HTMLInputElement;
			setNewMenu((prevState) => ({
				...prevState,
				[name]: target.checked,
			}));
		} else {
			setNewMenu((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
	};

	// handle input Form submit
	const handleAddMenu = (e: React.FormEvent) => {
		e.preventDefault();
		addMenuMutation.mutate();
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error instanceof Error) {
		return <div>Error: {error.message}</div>;
	}

	const items = data?.items || [];

	return (
		<>
			<Header>
				<title>LIST MENU </title>
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

				{/* TABLE INPUT DASHBOARD DIMULAI DARI SINI */}

				<div className="container mx-auto p-8 bg-white">
					<h1 className="text-2xl font-bold mb-6 ">Welcome Pak Horus</h1>
					<div className="mb-4">
						<h2 className="text-xl font-bold mb-4">Add New Menu</h2>
						<form
							onSubmit={handleAddMenu}
							className="grid grid-cols-2 gap-4 mb-8"
						>
							<input
								type="text"
								name="name"
								value={newMenu.name}
								onChange={handleInputChange}
								placeholder="Name"
								required
								className="border border-gray-400 p-2 rounded"
							/>
							<input
								type="text"
								name="description"
								value={newMenu.description}
								onChange={handleInputChange}
								placeholder="Description"
								required
								className="border border-gray-400 p-2 rounded"
							/>
							<input
								type="number"
								name="price"
								value={newMenu.price}
								onChange={handleInputChange}
								placeholder="Price"
								required
								className="border border-gray-400 p-2 rounded"
							/>
							<input
								type="text"
								name="imageId"
								value={newMenu.imageId}
								onChange={handleInputChange}
								placeholder="Image ID"
								required
								className="border border-gray-400 p-2 rounded"
							/>
							<select
								name="category"
								value={newMenu.category}
								onChange={handleInputChange}
								className="border border-gray-400 p-2 rounded"
							>
								<option value="coffee">Coffee</option>
								<option value="sweet">Sweet</option>
								<option value="others">Others</option>
							</select>
							<label className="flex items-center">
								<input
									type="checkbox"
									name="isAvailable"
									checked={newMenu.isAvailable}
									onChange={handleInputChange}
									className="mr-2"
								/>
								Is Available
							</label>
							<button
								type="submit"
								className="col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
							>
								Add Menu
							</button>
						</form>
					</div>

					{/* TABLE and MAPPING DIMULAI DARI SINI */}
					<table className="min-w-full text-black border border-gray-600">
						<thead>
							<tr className="bg-black text-white">
								<th className="py-3 px-6 text-left">name</th>
								<th className="py-3 px-6 text-left">description</th>
								<th className="py-3 px-6 text-left">Price</th>
								<th className="py-3 px-6 text-left">Edit</th>
							</tr>
						</thead>

						<tbody>
							{items?.map((entry: Entry, index: number) => {
								return (
									<tr
										key={entry.sys.id}
										className={`border-b border-gray-200 text-gret-700 ${
											index % 2 === 0 ? "bg-gray-100" : "bg-gray-400"
										}`}
									>
										<td className="py-3 px-6 text-left ">
											{entry.fields.name}
										</td>
										<td className="py-3 px-6 text-left ">
											{entry.fields.description}
										</td>
										<td className="py-3 px-6 text-left ">
											{entry.fields.price}
										</td>
										<td className="py-3 px-6 text-center">
											<button
												className="mx-2 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-700"
												onClick={() => handleDelete(entry.sys.id)}
											>
												Delete
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default ListMenu; // Ensure the exported name is also capitalized
