import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Fuel, Gauge, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export const inventory = [
	{
		id: 4,
		name: "Porsche 911 Carrera",
		brand: "Porsche",
		model: "911 Carrera",
		category: "Sports Coupe",
		year: 2024,
		price: 145900,
		image: "/images/porsche-911.jpg",
		fuel: "Gasoline",
		transmission: "Automatic",
		mileage: "5,200 mi",
		specs: { hp: "379 HP", speed: "182 mph", acceleration: "4.0s" },
		rating: 4.9,
		description:
			"The Porsche 911 Carrera is the quintessential sports car. Timeless design meets contemporary performance.",
		features: [
			"Sport Chrono Package",
			"PASM Sport Suspension",
			"Bose Surround Sound",
		],
	},
	{
		id: 5,
		name: "BMW X7 M60i",
		brand: "BMW",
		model: "X7 M60i",
		category: "Luxury SUV",
		year: 2024,
		price: 118500,
		image: "/images/bmw-x7.jpg",
		fuel: "Hybrid",
		transmission: "Automatic",
		mileage: "8,900 mi",
		specs: { hp: "523 HP", speed: "155 mph", acceleration: "4.5s" },
		rating: 4.8,
		description:
			"The BMW X7 M60i is the biggest and most luxurious SAV from BMW. It offers plenty of space and top-tier performance.",
		features: ["iDrive 8", "Sky Lounge LED Roof", "Massage Seats"],
	},
	{
		id: 6,
		name: "Audi RS e-tron GT",
		brand: "Audi",
		model: "RS e-tron GT",
		category: "Electric Performance",
		year: 2024,
		price: 142400,
		image: "/images/audi-rs-etron.jpg",
		fuel: "Electric",
		transmission: "Automatic",
		mileage: "3,100 mi",
		specs: { hp: "637 HP", speed: "155 mph", acceleration: "3.1s" },
		rating: 4.9,
		description:
			"The Audi RS e-tron GT is a fully electric grand tourer. It demonstrates how emotional and fascinating electric mobility can be.",
		features: ["e-torque Vectoring", "Carbon Roof", "Bang & Olufsen 3D Sound"],
	},
	{
		id: 7,
		name: "Ferrari Roma",
		brand: "Ferrari",
		model: "Roma",
		category: "Convertible",
		year: 2024,
		price: 243500,
		image: "/images/ferrari-roma.jpg",
		fuel: "Gasoline",
		transmission: "Automatic",
		mileage: "1,800 mi",
		specs: { hp: "612 HP", speed: "199 mph", acceleration: "3.4s" },
		rating: 5.0,
		description:
			"The Ferrari Roma is a mid-front-engined 2+ coupé. It features refined proportions and timeless design.",
		features: [
			"Side Slip Control 6.0",
			"Matrix LED Headlights",
			"Dual Cockpit",
		],
	},
	{
		id: 8,
		name: "Bentley Continental GT",
		brand: "Bentley",
		model: "Continental GT",
		category: "Luxury Coupe",
		year: 2024,
		price: 236000,
		image: "/images/hero-car.jpg",
		fuel: "Gasoline",
		transmission: "Automatic",
		mileage: "2,400 mi",
		specs: { hp: "542 HP", speed: "198 mph", acceleration: "3.9s" },
		rating: 4.9,
		description:
			"The Bentley Continental GT is the definition of a grand tourer. Unrivalled craftsmanship and effortless power.",
		features: ["Rotating Display", "Diamond Knurling", "City Specification"],
	},
	{
		id: 9,
		name: "Lamborghini Urus",
		brand: "Lamborghini",
		model: "Urus",
		category: "Performance SUV",
		year: 2024,
		price: 229900,
		image: "/images/bmw-x7.jpg",
		fuel: "Gasoline",
		transmission: "Automatic",
		mileage: "4,200 mi",
		specs: { hp: "657 HP", speed: "190 mph", acceleration: "3.5s" },
		rating: 4.8,
		description:
			"The Lamborghini Urus is the world's first Super Sport Utility Vehicle. Luxury, sportiness and performance meet comfort and versatility.",
		features: ["ANIMA Selector", "Carbon Ceramic Brakes", "Virtual Cockpit"],
	},
];

export function Inventory() {
	return (
		<section id="inventory" className="py-20 bg-white">
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
					{inventory.map((car, index) => (
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
