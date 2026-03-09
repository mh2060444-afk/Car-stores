import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { featuredCars } from "../../data/featuresCars";
import { inventory } from "../../data/inventory";
import { motion } from "motion/react";
import {
	ArrowLeft,
	Calendar,
	Gauge,
	Fuel,
	Settings,
	Zap,
	CheckCircle2,
	Star,
	MapPin,
	Phone,
	CreditCard,
} from "lucide-react";
import { Button } from "./ui/button";
import PaymentModal from "./PaymentModal";

export default function CarDetails() {
	const { id } = useParams();
	const carId = Number(id);
	const [isPaymentOpen, setIsPaymentOpen] = useState(false);
	const car = [...featuredCars, ...inventory].find((c) => c.id === carId);

	if (!car)
		return (
			<div className="min-h-screen flex items-center justify-center bg-slate-50">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">
						Car not found
					</h2>
					<Link to="/">
						<Button>Return Home</Button>
					</Link>
				</div>
			</div>
		);

	return (
		<div className="min-h-screen bg-slate-50 pt-24 pb-12">
			<div className="container mx-auto px-4">
				{/* Breadcrumb & Back */}
				<div className="mb-8">
					<Link
						to="/"
						className="inline-flex items-center text-slate-600 hover:text-blue-600 transition-colors"
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Back to Inventory
					</Link>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Left Column - Image */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
							<img
								src={car.image}
								alt={car.name}
								className="w-full h-full object-cover"
							/>
							<div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-slate-900">
								{car.category}
							</div>
						</div>
					</motion.div>

					{/* Right Column - Details */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="space-y-8"
					>
						<div>
							<div className="flex items-center justify-between mb-2">
								<h1 className="text-4xl font-bold text-slate-900">
									{car.name}
								</h1>
								{car.rating && (
									<div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
										<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
										<span className="font-semibold text-yellow-700">
											{car.rating}
										</span>
									</div>
								)}
							</div>
							<div className="text-3xl font-bold text-blue-600">
								${car.price.toLocaleString()}
							</div>
						</div>

						{/* Key Specs Grid */}
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
								<div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
									<Calendar className="w-5 h-5" />
								</div>
								<div>
									<div className="text-xs text-slate-500">Year</div>
									<div className="font-semibold">{car.year}</div>
								</div>
							</div>
							<div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
								<div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
									<Gauge className="w-5 h-5" />
								</div>
								<div>
									<div className="text-xs text-slate-500">Mileage</div>
									<div className="font-semibold">{car.mileage}</div>
								</div>
							</div>
							<div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
								<div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
									<Fuel className="w-5 h-5" />
								</div>
								<div>
									<div className="text-xs text-slate-500">Fuel Type</div>
									<div className="font-semibold">{car.fuel}</div>
								</div>
							</div>
							<div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
								<div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
									<Settings className="w-5 h-5" />
								</div>
								<div>
									<div className="text-xs text-slate-500">Transmission</div>
									<div className="font-semibold">{car.transmission}</div>
								</div>
							</div>
						</div>

						{/* Description */}
						<div>
							<h3 className="text-xl font-bold mb-3">Overview</h3>
							<p className="text-slate-600 leading-relaxed">
								{car.description ||
									`This ${car.year} ${car.name} is a stunning example of the ${car.brand} ${car.model}. Finished in a premium color, it offers an exceptional driving experience with its ${car.specs?.hp || "high performance"} engine.`}
							</p>
						</div>

						{/* Features */}
						{car.features && (
							<div>
								<h3 className="text-xl font-bold mb-3">Key Features</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
									{car.features.map((feature, index) => (
										<div key={index} className="flex items-center gap-2">
											<CheckCircle2 className="w-5 h-5 text-green-500" />
											<span className="text-slate-700">{feature}</span>
										</div>
									))}
								</div>
							</div>
						)}

						{/* Actions */}
						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<Button
								size="lg"
								className="bg-blue-600 hover:bg-blue-700 flex-1"
							>
								<Phone className="w-4 h-4 mr-2" /> Contact Dealer
							</Button>
							<Button size="lg" variant="outline" className="flex-1">
								<MapPin className="w-4 h-4 mr-2" /> Schedule Test Drive
							</Button>
							<Button
								size="lg"
								className="bg-slate-900 hover:bg-slate-800 text-white flex-1"
								onClick={() => setIsPaymentOpen(true)}
							>
								<CreditCard className="w-4 h-4 mr-2" /> Reserve Now
							</Button>
						</div>
					</motion.div>
				</div>
				<PaymentModal
					isOpen={isPaymentOpen}
					onClose={() => setIsPaymentOpen(false)}
					carName={car.name}
					amount={500}
				/>

				{/* Performance Specs */}
				{car.specs && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-white"
					>
						<div className="flex items-center gap-2 mb-8">
							<Zap className="w-6 h-6 text-yellow-400" />
							<h2 className="text-2xl font-bold">Performance Specifications</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700">
							<div className="text-center pt-4 md:pt-0">
								<div className="text-slate-400 mb-2">Horsepower</div>
								<div className="text-4xl md:text-5xl font-bold text-blue-400">
									{car.specs.hp}
								</div>
							</div>
							<div className="text-center pt-4 md:pt-0">
								<div className="text-slate-400 mb-2">Top Speed</div>
								<div className="text-4xl md:text-5xl font-bold text-blue-400">
									{car.specs.speed}
								</div>
							</div>
							<div className="text-center pt-4 md:pt-0">
								<div className="text-slate-400 mb-2">0-60 mph</div>
								<div className="text-4xl md:text-5xl font-bold text-blue-400">
									{car.specs.acceleration}
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</div>
		</div>
	);
}
