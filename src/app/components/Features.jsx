import { motion } from "motion/react";
import { Shield, Award, Headphones, Zap } from "lucide-react";

const features = [
	{
		icon: Shield,
		title: "Certified Quality",
		description:
			"Every vehicle undergoes rigorous inspection to ensure top quality and reliability.",
	},
	{
		icon: Award,
		title: "Best Prices",
		description:
			"Competitive pricing with flexible financing options to suit your budget.",
	},
	{
		icon: Headphones,
		title: "24/7 Support",
		description:
			"Our dedicated team is always ready to assist you with any inquiries.",
	},
	{
		icon: Zap,
		title: "Fast Delivery",
		description:
			"Quick and secure delivery to your doorstep anywhere in the country.",
	},
];

export default function Features() {
	return (
		<section id="about" className="py-20 bg-slate-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="text-blue-600 text-sm uppercase tracking-wider mb-2 block">
						Why Choose Us
					</span>
					<h2 className="text-4xl md:text-5xl mb-4">
						Your Trusted Car Partner
					</h2>
					<p className="text-slate-600 max-w-2xl mx-auto">
						We provide an unmatched car buying experience with premium service
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -10 }}
							className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
						>
							<motion.div
								whileHover={{ rotate: 360, scale: 1.1 }}
								transition={{ duration: 0.6 }}
								className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
							>
								<feature.icon className="w-8 h-8 text-blue-600" />
							</motion.div>
							<h3 className="text-xl mb-3">{feature.title}</h3>
							<p className="text-slate-600">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
