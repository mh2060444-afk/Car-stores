import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
	return (
		<div className="pt-20">
			<section className="py-20 bg-slate-900 text-white">
				<div className="container mx-auto px-4 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-4xl md:text-6xl font-bold mb-6"
					>
						Get in Touch
					</motion.h1>
					<p className="text-xl text-slate-300 max-w-2xl mx-auto">
						Have questions about a vehicle or our services? Our team is here to
						help.
					</p>
				</div>
			</section>

			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="space-y-8"
						>
							<div>
								<h2 className="text-3xl font-bold mb-6">Contact Information</h2>
								<p className="text-slate-600 mb-8">
									Visit our showroom or contact us directly. We look forward to
									serving you.
								</p>
							</div>

							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
										<MapPin className="w-6 h-6" />
									</div>
									<div>
										<h3 className="font-bold text-lg mb-1">Our Location</h3>
										<p className="text-slate-600">
											123 Luxury Drive
											<br />
											Beverly Hills, CA 90210
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
										<Phone className="w-6 h-6" />
									</div>
									<div>
										<h3 className="font-bold text-lg mb-1">Phone Number</h3>
										<p className="text-slate-600">+1 (555) 123-4567</p>
										<p className="text-slate-500 text-sm">Mon-Fri 9am-6pm</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
										<Mail className="w-6 h-6" />
									</div>
									<div>
										<h3 className="font-bold text-lg mb-1">Email Address</h3>
										<p className="text-slate-600">info@autoelite.com</p>
										<p className="text-slate-600">sales@autoelite.com</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
										<Clock className="w-6 h-6" />
									</div>
									<div>
										<h3 className="font-bold text-lg mb-1">Business Hours</h3>
										<div className="text-slate-600 grid grid-cols-2 gap-x-8">
											<span>Monday - Friday:</span>
											<span>9:00 AM - 8:00 PM</span>
											<span>Saturday:</span>
											<span>10:00 AM - 6:00 PM</span>
											<span>Sunday:</span>
											<span>Closed</span>
										</div>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
						>
							<h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
							<form className="space-y-6">
								<div className="grid md:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-slate-700 mb-2">
											First Name
										</label>
										<Input placeholder="John" className="bg-white" />
									</div>
									<div>
										<label className="block text-sm font-medium text-slate-700 mb-2">
											Last Name
										</label>
										<Input placeholder="Doe" className="bg-white" />
									</div>
								</div>
								<div>
									<label className="block text-sm font-medium text-slate-700 mb-2">
										Email Address
									</label>
									<Input
										type="email"
										placeholder="john@example.com"
										className="bg-white"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-slate-700 mb-2">
										Phone Number
									</label>
									<Input
										type="tel"
										placeholder="(555) 123-4567"
										className="bg-white"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-slate-700 mb-2">
										Message
									</label>
									<textarea
										rows={4}
										className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
										placeholder="How can we help you?"
									></textarea>
								</div>
								<Button className="w-full bg-blue-600 hover:bg-blue-700">
									Send Message
								</Button>
							</form>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
