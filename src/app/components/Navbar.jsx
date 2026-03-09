import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X, Car } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "Inventory", href: "/inventory" },
		{ name: "About", href: "/about" },
		{ name: "Financing", href: "/financing" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6 }}
			className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<Link to="/">
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="flex items-center gap-2 cursor-pointer"
						>
							<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
								<Car className="w-6 h-6 text-white" />
							</div>
							<span className="text-2xl">AutoElite</span>
						</motion.div>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((item) => {
							const isActive = location.pathname === item.href;
							return (
								<Link key={item.name} to={item.href} className="relative">
									<motion.span
										whileHover={{ y: -2 }}
										className={`block text-sm font-medium transition-colors ${
											isActive
												? "text-blue-600"
												: "text-slate-700 hover:text-blue-600"
										}`}
									>
										{item.name}
									</motion.span>
									{isActive && (
										<motion.div
											layoutId="navbar-indicator"
											className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
											transition={{
												type: "spring",
												bounce: 0.2,
												duration: 0.6,
											}}
										/>
									)}
								</Link>
							);
						})}
					</div>

					{/* CTA Button */}
					<div className="hidden md:block">
						<Button className="bg-blue-600 hover:bg-blue-700">
							Schedule Test Drive
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden pb-6"
					>
						<div className="flex flex-col gap-4">
							{navLinks.map((item) => {
								const isActive = location.pathname === item.href;
								return (
									<Link
										key={item.name}
										to={item.href}
										className={`transition-colors py-2 font-medium ${
											isActive
												? "text-blue-600"
												: "text-slate-700 hover:text-blue-600"
										}`}
										onClick={() => setIsOpen(false)}
									>
										{item.name}
									</Link>
								);
							})}
							<Button className="bg-blue-600 hover:bg-blue-700 w-full">
								Schedule Test Drive
							</Button>
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
}
