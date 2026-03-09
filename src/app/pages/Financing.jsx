import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Calculator, CheckCircle2 } from "lucide-react";

const Financing = () => {
	const [price, setPrice] = useState(50000);
	const [downPayment, setDownPayment] = useState(10000);
	const [rate, setRate] = useState(4.5);
	const [term, setTerm] = useState(60);
	const [isSubmitted, setIsSubmitted] = useState(false);

	// Calculate monthly payment
	const principal = Math.max(0, price - downPayment);
	const monthlyRate = rate / 100 / 12;
	const monthlyPayment =
		principal > 0 && rate > 0 && term > 0
			? (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) /
				(Math.pow(1 + monthlyRate, term) - 1)
			: 0;

	const handleApply = () => {
		setIsSubmitted(true);
		// In a real application, you would send the financing data to your backend here.
	};

	return (
		<div className="pt-20">
			<section className="py-20 bg-slate-900 text-white">
				<div className="container mx-auto px-4 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-4xl md:text-6xl font-bold mb-6"
					>
						Flexible Financing Options
					</motion.h1>
					<p className="text-xl text-slate-300 max-w-2xl mx-auto">
						We work with top lenders to provide competitive rates and terms
						tailored to your needs.
					</p>
				</div>
			</section>

			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Calculator */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
						>
							<div className="flex items-center gap-3 mb-6">
								<Calculator className="w-6 h-6 text-blue-600" />
								<h2 className="text-2xl font-bold">Payment Calculator</h2>
							</div>
							<p className="text-slate-600 mb-6">
								Use our interactive calculator to estimate your monthly
								payments. Adjust the vehicle price, down payment, interest rate,
								and loan term to see how they affect your monthly installment.
							</p>
							<div className="space-y-6">
								<div>
									<label className="block text-sm font-medium text-slate-700 mb-2">
										Vehicle Price ($)
									</label>
									<Input
										type="number"
										className="bg-white"
										value={price}
										onChange={(e) => setPrice(Number(e.target.value))}
									/>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-slate-700 mb-2">
											Down Payment ($)
										</label>
										<Input
											type="number"
											className="bg-white"
											value={downPayment}
											onChange={(e) => setDownPayment(Number(e.target.value))}
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-slate-700 mb-2">
											Interest Rate (%)
										</label>
										<Input
											type="number"
											className="bg-white"
											value={rate}
											onChange={(e) => setRate(Number(e.target.value))}
											step="0.1"
										/>
									</div>
								</div>
								<div>
									<label className="block text-sm font-medium text-slate-700 mb-2">
										Loan Term
									</label>
									<select
										className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
										value={term}
										onChange={(e) => setTerm(Number(e.target.value))}
									>
										<option value="12">12 Months</option>
										<option value="24">24 Months</option>
										<option>36 Months</option>
										<option>48 Months</option>
										<option>60 Months</option>
										<option>72 Months</option>
									</select>
								</div>
								<div className="pt-4 border-t border-slate-200">
									<div className="flex justify-between items-center mb-4">
										<span className="text-slate-600">
											Estimated Monthly Payment
										</span>
										<span className="text-3xl font-bold text-blue-600">
											$
											{monthlyPayment.toLocaleString(undefined, {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</span>
									</div>
									{isSubmitted ? (
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											className="bg-green-50 text-green-700 p-4 rounded-lg text-center"
										>
											<p className="font-bold">Application Received!</p>
											<p className="text-sm">
												Our finance team will contact you shortly.
											</p>
										</motion.div>
									) : (
										<Button
											className="w-full bg-blue-600 hover:bg-blue-700"
											onClick={handleApply}
										>
											Apply for Financing
										</Button>
									)}
									<p className="text-xs text-slate-500 mt-4 text-center">
										*Estimated payment for illustration purposes only. Actual
										terms may vary based on credit approval.
									</p>
								</div>
							</div>
						</motion.div>

						{/* Benefits */}
						<div className="space-y-8">
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
							>
								<h2 className="text-3xl font-bold mb-6">
									Why Finance with Us?
								</h2>
								<div className="space-y-6">
									{[
										{
											title: "Competitive Rates",
											desc: "Access to exclusive rates from our network of premium lenders.",
										},
										{
											title: "Quick Approval",
											desc: "Get pre-approved in minutes with our streamlined digital process.",
										},
										{
											title: "Flexible Terms",
											desc: "Customized loan and lease packages to fit your financial goals.",
										},
										{
											title: "No Hidden Fees",
											desc: "Transparent pricing and clear terms on every transaction.",
										},
									].map((item, index) => (
										<div key={index} className="flex gap-4">
											<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600">
												<CheckCircle2 className="w-5 h-5" />
											</div>
											<div>
												<h3 className="font-bold text-lg mb-1">{item.title}</h3>
												<p className="text-slate-600">{item.desc}</p>
											</div>
										</div>
									))}
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Financing;
