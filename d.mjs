import fs from "fs";
import path from "path";
import fetch from "node-fetch"; // npm install node-fetch
import { inventory } from "./src/data/inventory.js";

// Import your inventory
// import { inventory } from "../src/data/inventory.js"; // Adjust the path if needed

// Folder to save images
const imagesFolder = path.join(process.cwd(), "public/images");

// Create folder if it doesn't exist
if (!fs.existsSync(imagesFolder)) {
	fs.mkdirSync(imagesFolder);
}

async function downloadImage(url, filename) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
	const buffer = await res.arrayBuffer();
	fs.writeFileSync(path.join(imagesFolder, filename), Buffer.from(buffer));
	console.log(`Downloaded: ${filename}`);
}

async function main() {
	for (const car of inventory) {
		try {
			// Get file extension from URL
			const ext = path.extname(new URL(car.image).pathname) || ".jpg";
			const filename = `${car.brand}-${car.model.replace(/\s+/g, "_")}${ext}`;
			await downloadImage(car.image, filename);
		} catch (err) {
			console.error(`Error downloading ${car.name}:`, err.message);
		}
	}
	console.log("All downloads finished!");
}

main();
