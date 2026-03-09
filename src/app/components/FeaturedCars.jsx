import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { featuredCars } from "../../data/featuresCars";

export default function FeaturedCars() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="text-blue-600 text-sm uppercase tracking-wider mb-2 block">
						Premium Selection
					</span>
					<h2 className="text-4xl md:text-5xl mb-4">Featured Vehicles</h2>
					<p className="text-slate-600 max-w-2xl mx-auto">
						Explore our handpicked collection of the finest vehicles available
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuredCars.map((car, index) => (
						<motion.div
							key={car.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-slate-200">
								<div className="relative overflow-hidden group">
									<Link to={`/car/${car.id}`}>
										<motion.img
											whileHover={{ scale: 1.1 }}
											transition={{ duration: 0.4 }}
											src={car.image}
											alt={car.name}
											className="w-full h-64 object-cover"
										/>
									</Link>
									<div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1">
										<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
										<span className="text-sm">{car.rating}</span>
									</div>
									<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
										<Link to={`/car/${car.id}`}>
											<Button className="bg-white text-black hover:bg-slate-100">
												View Details
											</Button>
										</Link>
									</div>
								</div>
								<CardContent className="p-6">
									<div className="flex justify-between items-start mb-4">
										<div>
											<Link
												to={`/car/${car.id}`}
												className="text-2xl mb-1 block hover:underline"
											>
												{car.name}
											</Link>
											<p className="text-slate-500">{car.category}</p>
										</div>
										<div className="text-right">
											<div className="text-2xl text-blue-600">
												${car.price.toLocaleString()}
											</div>
										</div>
									</div>
									<div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
										<div>
											<div className="text-sm text-slate-500">Power</div>
											<div className="text-sm">{car.specs.hp}</div>
										</div>
										<div>
											<div className="text-sm text-slate-500">Top Speed</div>
											<div className="text-sm">{car.specs.speed}</div>
										</div>
										<div>
											<div className="text-sm text-slate-500">0-60 mph</div>
											<div className="text-sm">{car.specs.acceleration}</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
					className="text-center mt-12"
				>
					<Link
						to="/inventory"
						size="lg"
						variant="outline"
						className="border-blue-600 text-blue-600 hover:bg-blue-50"
					>
						View All Inventory
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
