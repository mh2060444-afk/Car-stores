import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
	return (
		<>
			<div className="relative h-screen w-full overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-8">
				{/* Background pattern */}
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								"linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
							backgroundSize: "50px 50px",
						}}
					></div>
				</div>

				{/* Right content - Animated Car with looping movement */}
				<div className="relative h-150 hidden lg:block">
					{/* Background car image */}
					<img
						src="/images/Lamborghini-Urus.jpg"
						alt="Luxury Sports Car"
						className="absolute inset-0 w-full h-full object-cover z-0"
						style={{ filter: "brightness(0.7)" }}
					/>
					{/* Overlay content */}
					<div className="relative bg-black/50 z-10 flex flex-col items-center justify-center h-full text-center text-white">
						<h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
							Drive Your <span className="block text-blue-400">Dream Car</span>
						</h1>
						<p className="text-xl text-slate-200 mb-8 max-w-lg mx-auto drop-shadow">
							Discover our exclusive collection of luxury and sports vehicles.
							Find the perfect car that matches your style and performance
							needs.
						</p>
						<div className="flex gap-4 flex-wrap justify-center mb-8">
							<Button
								size="lg"
								className="bg-blue-600 hover:bg-blue-700 text-white"
							>
								Browse Inventory <ChevronRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-white/20 bg-white hover:bg-white/10"
							>
								Contact Us
							</Button>
						</div>
						<div className="grid grid-cols-3 gap-8 mt-12">
							<div>
								<div className="text-3xl mb-1">500+</div>
								<div className="text-slate-400 text-sm">Cars Available</div>
							</div>
							<div>
								<div className="text-3xl mb-1">50+</div>
								<div className="text-slate-400 text-sm">Luxury Brands</div>
							</div>
							<div>
								<div className="text-3xl mb-1">10K+</div>
								<div className="text-slate-400 text-sm">Happy Clients</div>
							</div>
						</div>
					</div>
				</div>

				{/* Scroll indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2 }}
					className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
						className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
					>
						<motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
					</motion.div>
				</motion.div>
			</div>
		</>
	);
}
