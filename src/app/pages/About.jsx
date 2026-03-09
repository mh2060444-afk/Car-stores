import { motion } from "motion/react";
import { Award, Users, History, Target } from "lucide-react";

const About = () => {
	return (
		<div className="pt-20">
			{/* Hero Section */}
			<section className="relative py-20 bg-slate-900 text-white overflow-hidden">
				<div className="absolute inset-0 opacity-20">
					<img
						src="/images/about-showroom.jpg"
						alt="Showroom"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="container mx-auto px-4 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="max-w-3xl mx-auto text-center"
					>
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Redefining Luxury Automotive
						</h1>
						<p className="text-xl text-slate-300">
							Since 2010, AutoElite has been the premier destination for
							exceptional vehicles and unparalleled service.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{[
							{ icon: History, label: "Years of Excellence", value: "14+" },
							{ icon: Users, label: "Happy Clients", value: "10k+" },
							{ icon: Award, label: "Awards Won", value: "25+" },
							{ icon: Target, label: "Vehicles Sold", value: "15k+" },
						].map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="text-center"
							>
								<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
									<stat.icon className="w-6 h-6" />
								</div>
								<div className="text-3xl font-bold text-slate-900 mb-1">
									{stat.value}
								</div>
								<div className="text-slate-500">{stat.label}</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Story Section */}
			<section className="py-20 bg-slate-50">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
						>
							<h2 className="text-3xl font-bold mb-6">Our Story</h2>
							<div className="space-y-4 text-slate-600">
								<p>
									Founded with a passion for automotive excellence, AutoElite
									began as a boutique dealership specializing in rare imports.
									Over the years, we've grown into a comprehensive luxury
									automotive center, offering sales, service, and financing for
									the world's most prestigious brands.
								</p>
								<p>
									Our philosophy is simple: every client deserves a personalized
									experience. Whether you're purchasing your first sports car or
									adding to a collection, our team of experts is dedicated to
									finding the perfect vehicle for your lifestyle.
								</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
						>
							<img
								src="/images/about-dealership.jpg"
								alt="Our Dealership"
								className="absolute inset-0 w-full h-full object-cover"
							/>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
