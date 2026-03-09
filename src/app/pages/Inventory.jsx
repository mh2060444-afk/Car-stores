import { useState, useEffect } from "react";

import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Fuel, Gauge, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { inventory } from "../../data/inventory";
import { getInventory } from "../../lib/queries";

export default function Inventory() {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		const fetchCars = async () => {
			try {
				const data = await getInventory();
				console.log("Fetched inventory:", data);
				setCars(data);
			} catch (error) {
				console.error("Error fetching inventory:", error);
			}
		};
		fetchCars();
	}, []);

	return (
		<section id="inventory" className="py-20 mt-8 bg-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="text-blue-600 text-sm uppercase tracking-wider mb-2 block">
						Available Now
					</span>
					<h2 className="text-4xl md:text-5xl mb-4">Current Inventory</h2>
					<p className="text-slate-600 max-w-2xl mx-auto">
						Browse our extensive collection of premium vehicles ready for
						immediate delivery
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{cars.map((car, index) => (
						<motion.div
							key={car.id}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
						>
							<Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-slate-200">
								<div className="relative overflow-hidden group">
									<motion.img
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.3 }}
										src={car.image}
										alt={car.name}
										className="w-full h-56 object-cover"
									/>
									<div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
										{car.year}
									</div>
								</div>
								<CardContent className="p-6">
									<div className="mb-4">
										<h3 className="text-xl mb-1">{car.name}</h3>
										<p className="text-slate-500 text-sm">{car.category}</p>
									</div>

									<div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-200">
										<div className="flex items-center gap-2 text-sm text-slate-600">
											<Fuel className="w-4 h-4" />
											<span>{car.fuel}</span>
										</div>
										<div className="flex items-center gap-2 text-sm text-slate-600">
											<Settings className="w-4 h-4" />
											<span>{car.transmission}</span>
										</div>
										<div className="flex items-center gap-2 text-sm text-slate-600">
											<Gauge className="w-4 h-4" />
											<span>{car.mileage}</span>
										</div>
									</div>

									<div className="flex items-center justify-between">
										<div className="text-2xl text-blue-600">
											${car.price.toLocaleString()}
										</div>
										<Link to={`/car/${car.id}`}>
											<Button
												size="sm"
												className="bg-blue-600 hover:bg-blue-700"
											>
												Details
											</Button>
										</Link>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
