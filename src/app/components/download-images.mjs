import fs from "fs";
import path from "path";
import fetch from "node-fetch";

// Featured cars image URLs
const featuredCars = [
	{
		name: "Mercedes AMG GT",
		url: "https://images.unsplash.com/photo-1618480483701-c31ac5590db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBzaWRlJTIwdmlld3xlbnwxfHx8fDE3NzI4MzI3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		filename: "mercedes-amg-gt.jpg",
	},
	{
		name: "Range Rover Sport",
		url: "https://images.unsplash.com/photo-1758411898280-2dc7c95e0ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdXYlMjBjYXIlMjBkZWFsZXJzaGlwfGVufDF8fHx8MTc3Mjg5MzQyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		filename: "range-rover-sport.jpg",
	},
	{
		name: "Tesla Model S",
		url: "https://images.unsplash.com/photo-1580959046674-8fc8f92b5fd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNlZGFuJTIwYXV0b21vYmlsZXxlbnwxfHx8fDE3NzI4OTM0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		filename: "tesla-model-s.jpg",
	},
];

const publicDir = path.resolve("public/images");

async function downloadImage(url, filename) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to fetch ${url}`);
	const buffer = await res.arrayBuffer();
	fs.writeFileSync(path.join(publicDir, filename), Buffer.from(buffer));
	console.log(`Downloaded ${filename}`);
}

if (!fs.existsSync(publicDir)) {
	fs.mkdirSync(publicDir, { recursive: true });
}

(async () => {
	for (const car of featuredCars) {
		try {
			await downloadImage(car.url, car.filename);
		} catch (e) {
			console.error(`Error downloading ${car.name}:`, e.message);
		}
	}
})();
