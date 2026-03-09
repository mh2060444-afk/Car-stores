import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
	Elements,
	CardElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import { motion, AnimatePresence } from "motion/react";
import { X, CreditCard, Lock } from "lucide-react";
import { Button } from "./ui/button";

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ amount, onSuccess }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);
		setError(null);

		if (!stripe || !elements) {
			return;
		}

		const cardElement = elements.getElement(CardElement);

		// Create a payment method
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement,
		});

		if (error) {
			setError(error.message);
			setProcessing(false);
		} else {
			console.log("[PaymentMethod]", paymentMethod);
			// Simulate backend processing delay
			setTimeout(() => {
				setProcessing(false);
				onSuccess();
			}, 1500);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="space-y-2">
				<label className="text-sm font-medium text-slate-700">
					Card Details
				</label>
				<div className="p-3 border border-slate-200 rounded-lg bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
					<CardElement
						options={{
							style: {
								base: {
									fontSize: "16px",
									color: "#1e293b",
									"::placeholder": { color: "#94a3b8" },
								},
								invalid: { color: "#ef4444" },
							},
						}}
					/>
				</div>
			</div>
			{error && <div className="text-sm text-red-600">{error}</div>}
			<Button
				type="submit"
				disabled={!stripe || processing}
				className="w-full bg-blue-600 hover:bg-blue-700 h-11"
			>
				{processing ? (
					"Processing..."
				) : (
					<>
						<Lock className="w-4 h-4 mr-2" /> Pay ${amount.toLocaleString()}
					</>
				)}
			</Button>
			<p className="text-xs text-center text-slate-500 flex items-center justify-center gap-1">
				<Lock className="w-3 h-3" /> Payments are secure and encrypted
			</p>
		</form>
	);
};

export default function PaymentModal({ isOpen, onClose, carName, amount }) {
	const [success, setSuccess] = useState(false);

	if (!isOpen) return null;

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
					/>
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
					>
						<div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
							<h3 className="text-xl font-bold text-slate-900">
								Reserve Vehicle
							</h3>
							<button
								onClick={onClose}
								className="text-slate-400 hover:text-slate-600 transition-colors"
							>
								<X className="w-5 h-5" />
							</button>
						</div>
						<div className="p-6">
							{success ? (
								<div className="text-center py-8">
									<div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
										<CreditCard className="w-8 h-8" />
									</div>
									<h4 className="text-2xl font-bold text-slate-900 mb-2">
										Reservation Confirmed!
									</h4>
									<p className="text-slate-600 mb-6">
										You have successfully reserved the {carName}.
									</p>
									<Button onClick={onClose} className="w-full">
										Done
									</Button>
								</div>
							) : (
								<>
									<div className="mb-6">
										<p className="text-slate-600 mb-1">Reserving:</p>
										<p className="text-lg font-semibold text-slate-900">
											{carName}
										</p>
										<div className="mt-4 flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
											<span className="text-blue-700 font-medium">
												Reservation Fee
											</span>
											<span className="text-blue-700 font-bold text-lg">
												${amount.toLocaleString()}
											</span>
										</div>
									</div>
									<Elements stripe={stripePromise}>
										<CheckoutForm
											amount={amount}
											onSuccess={() => setSuccess(true)}
										/>
									</Elements>
								</>
							)}
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
