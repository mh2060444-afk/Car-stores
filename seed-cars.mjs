import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, ".env");
dotenv.config({ path: envPath });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
	console.error(
		"Error: VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required in .env",
	);
	process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const getImageUrl = (filename) => {
	return `${supabaseUrl}/storage/v1/object/public/images/${filename}`;
};

const cars = [
	// Featured Cars
	{
		id: 1,
		name: "Mercedes AMG GT",
		brand: "Mercedes-Benz",
		model: "AMG GT",
		category: "Sports Car",
		year: 2024,
		price: 159999,
		image: getImageUrl("mercedes-amg-gt.jpg"),
		fuel: "Gasoline",
		transmission: "Automatic",
		mileage: "1,200 mi",
		specs: { hp: "523 HP", speed: "196 mph", acceleration: "3.6s" },
		rating: 4.9,
		description:
			"Experience the thrill of the Mercedes-AMG GT. A masterpiece of engineering and design, offering breathtaking performance and luxury.",
		features: [
			"Burmester Surround Sound",
			"Nappa Leather",
			"Active Aerodynamics",
			"Race Mode",
		],
		is_featured: true,
	},
	{
		id: 2,
		name: "Range Rover Sport",
		brand: "Land Rover",
		model: "Range Rover Sport",
		category: "Luxury SUV",
		year: 2024,
		price: 89999,
		image: getImageUrl("range-rover-sport.jpg"),
		fuel: "Hybrid",
		transmission: "Automatic",
		mileage: "3,500 mi",
		specs: { hp: "395 HP", speed: "140 mph", acceleration: "5.9s" },
		rating: 4.8,
		description:
			"The Range Rover Sport combines dynamic sporting personality with the peerless refinement you expect. A true luxury SUV.",
		features: [
			"Meridian Sound System",
			"Panoramic Roof",
			"Terrain Response 2",
			"Heated Seats",
		],
		is_featured: true,
	},
	{
		id: 3,
		name: "Tesla Model S",
		brand: "Tesla",
		model: "Model S",
		category: "Electric Sedan",
		year: 2024,
		price: 94999,
		image: getImageUrl("tesla-model-s.jpg"),
		fuel: "Electric",
		transmission: "Automatic",
		mileage: "500 mi",
		specs: { hp: "670 HP", speed: "175 mph", acceleration: "3.1s" },
		rating: 4.9,
		description:
			"Model S is built for speed and range, with beyond ludicrous acceleration, unparalleled performance and a refined design.",
		features: [
			"Autopilot",
			"17-inch Touchscreen",
			"Yoke Steering",
			"Gaming Computer",
		],
		is_featured: true,
	},
	// Inventory Cars
	{
		id: 4,
		name: "Porsche 911 Carrera",
		brand: "Porsche",
		model: "911 Carrera",
		category: "Sports Coupe",
		year: 2024,
		price: 145900,
		image: getImageUrl("porsche-911.jpg"),
		fuel: "Gasoline",
		transmission: "Automatic",
		mileage: "5,200 mi",
		specs: { hp: "379 HP", speed: "182 mph", acceleration: "4.0s" },
		rating: 4.9,
		description:
			"The Porsche 911 Carrera is the quintessential sports car. Timeless design meets contemporary performance.",
		features: [
			"Sport Chrono Package",
			"PASM Sport Suspension",
			"Bose Surround Sound",
		],
		is_featured: false,
	},
	{
		id: 5,
		name: "BMW X7 M60i",
		brand: "BMW",
		model: "X7 M60i",
		category: "Luxury SUV",
		year: 2024,
		price: 118500,
		image: getImageUrl("bmw-x7.jpg"),
		fuel: "Hybrid",
		transmission: "Automatic",
		mileage: "8,900 mi",
		specs: { hp: "523 HP", speed: "155 mph", acceleration: "4.5s" },
		rating: 4.8,
		description:
			"The BMW X7 M60i is the biggest and most luxurious SAV from BMW. It offers plenty of space and top-tier performance.",
		features: ["iDrive 8", "Sky Lounge LED Roof", "Massage Seats"],
		is_featured: false,
	},
	{
		id: 6,
		name: "Audi RS e-tron GT",
		brand: "Audi",
		model: "RS e-tron GT",
		category: "Electric Performance",
		year: 2024,
		price: 142400,
		image: getImageUrl("audi-rs-etron.jpg"),
		fuel: "Electric",
		transmission: "Automatic",
		mileage: "3,100 mi",
		specs: { hp: "637 HP", speed: "155 mph", acceleration: "3.1s" },
		rating: 4.9,
		description:
			"The Audi RS e-tron GT is a fully electric grand tourer. It demonstrates how emotional and fascinating electric mobility can be.",
		features: ["e-torque Vectoring", "Carbon Roof", "Bang & Olufsen 3D Sound"],
		is_featured: false,
	},
	{
		id: 7,
		name: "Ferrari Roma",
		brand: "Ferrari",
		model: "Roma",
		category: "Convertible",
		year: 2024,
		price: 243500,
		image: getImageUrl("ferrari-roma.jpg"),
		fuel: "Gasoline",
		transmission: "Automatic",
		mileage: "1,800 mi",
		specs: { hp: "612 HP", speed: "199 mph", acceleration: "3.4s" },
		rating: 5.0,
		description:
			"The Ferrari Roma is a mid-front-engined 2+ coupé. It features refined proportions and timeless design.",
		features: [
			"Side Slip Control 6.0",
			"Matrix LED Headlights",
			"Dual Cockpit",
		],
		is_featured: false,
	},
	{
		id: 8,
		name: "Bentley Continental GT",
		brand: "Bentley",
		model: "Continental GT",
		category: "Luxury Coupe",
		year: 2024,
		price: 236000,
		image: getImageUrl("hero-car.jpg"),
		fuel: "Gasoline",
		transmission: "Automatic",
		mileage: "2,400 mi",
		specs: { hp: "542 HP", speed: "198 mph", acceleration: "3.9s" },
		rating: 4.9,
		description:
			"The Bentley Continental GT is the definition of a grand tourer. Unrivalled craftsmanship and effortless power.",
		features: ["Rotating Display", "Diamond Knurling", "City Specification"],
		is_featured: false,
	},
	{
		id: 9,
		name: "Lamborghini Urus",
		brand: "Lamborghini",
		model: "Urus",
		category: "Performance SUV",
		year: 2024,
		price: 229900,
		image: getImageUrl("bmw-x7.jpg"),
		fuel: "Gasoline",
		transmission: "Automatic",
		mileage: "4,200 mi",
		specs: { hp: "657 HP", speed: "190 mph", acceleration: "3.5s" },
		rating: 4.8,
		description:
			"The Lamborghini Urus is the world's first Super Sport Utility Vehicle. Luxury, sportiness and performance meet comfort and versatility.",
		features: ["ANIMA Selector", "Carbon Ceramic Brakes", "Virtual Cockpit"],
		is_featured: false,
	},
];

async function seedCars() {
	console.log("Seeding cars...");
	const { data, error } = await supabase
		.from("cars")
		.upsert(cars, { onConflict: "id" });

	if (error) {
		console.error("Error seeding cars:", error);
	} else {
		console.log("Cars seeded successfully!");
	}
}

seedCars();
