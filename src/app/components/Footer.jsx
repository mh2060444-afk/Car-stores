import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
	Mail,
	Phone,
	MapPin,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
} from "lucide-react";

export default function Footer() {
	return (
		<footer id="contact" className="bg-slate-900 text-white">
			{/* Newsletter Section */}
			<div className="border-b border-slate-800">
				<div className="container mx-auto px-4 py-16">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<h3 className="text-3xl mb-2">Stay Updated</h3>
							<p className="text-slate-400">
								Subscribe to get special offers and latest inventory updates
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="flex gap-2"
						>
							<Input
								type="email"
								placeholder="Enter your email"
								className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
							/>
							<Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
								Subscribe
							</Button>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Main Footer */}
			<div className="container mx-auto px-4 py-12">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<h3 className="text-2xl mb-4">AutoElite</h3>
						<p className="text-slate-400 mb-6">
							Your premier destination for luxury and performance vehicles.
							Excellence in every drive.
						</p>
						<div className="flex gap-4">
							{[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
								<motion.a
									key={index}
									href="#"
									whileHover={{ scale: 1.2, y: -2 }}
									className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
								>
									<Icon className="w-5 h-5" />
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<h4 className="text-lg mb-4">Quick Links</h4>
						<ul className="space-y-2">
							{[
								"About Us",
								"Inventory",
								"Financing",
								"Test Drive",
								"Trade In",
								"Contact",
							].map((link) => (
								<li key={link}>
									<a
										href="#"
										className="text-slate-400 hover:text-blue-400 transition-colors"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Categories */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h4 className="text-lg mb-4">Categories</h4>
						<ul className="space-y-2">
							{[
								"Sports Cars",
								"Luxury Sedans",
								"SUVs",
								"Electric Vehicles",
								"Convertibles",
								"Vintage Cars",
							].map((category) => (
								<li key={category}>
									<a
										href="#"
										className="text-slate-400 hover:text-blue-400 transition-colors"
									>
										{category}
									</a>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<h4 className="text-lg mb-4">Contact Us</h4>
						<ul className="space-y-4">
							<li className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
								<span className="text-slate-400">
									123 Luxury Drive
									<br />
									Beverly Hills, CA 90210
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
								<span className="text-slate-400">+1 (555) 123-4567</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
								<span className="text-slate-400">info@autoelite.com</span>
							</li>
						</ul>
					</motion.div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-slate-800">
				<div className="container mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
						<p>&copy; 2026 AutoElite. All rights reserved.</p>
						<div className="flex gap-6">
							<a href="#" className="hover:text-blue-400 transition-colors">
								Privacy Policy
							</a>
							<a href="#" className="hover:text-blue-400 transition-colors">
								Terms of Service
							</a>
							<a href="#" className="hover:text-blue-400 transition-colors">
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
