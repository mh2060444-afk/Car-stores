import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./components/CarDetails";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Inventory from "./pages/Inventory";
import About from "./pages/About";
import Financing from "./pages/Financing";
import Contact from "./pages/Contact";

export default function App() {
	return (
		<BrowserRouter>
			<div className="size-full">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/inventory" element={<Inventory />} />
					<Route path="/about" element={<About />} />
					<Route path="/financing" element={<Financing />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/car/:id" element={<CarDetails />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}
