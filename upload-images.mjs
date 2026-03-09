import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, ".env");

// Load environment variables
dotenv.config({ path: envPath });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
// const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
	console.error(
		"Error: VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY are required in .env",
	);
	process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const imagesDir = path.join(__dirname, "../public/images");
const bucketName = "images";

async function uploadImages() {
	if (!fs.existsSync(imagesDir)) {
		console.error(`Images directory not found at: ${imagesDir}`);
		return;
	}

	const files = fs.readdirSync(imagesDir);
	console.log(`Found ${files.length} files to upload.`);

	for (const file of files) {
		if (file.startsWith(".")) continue;

		const filePath = path.join(imagesDir, file);
		const fileBuffer = fs.readFileSync(filePath);
		const ext = path.extname(file).toLowerCase();

		let contentType = "application/octet-stream";
		if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
		else if (ext === ".png") contentType = "image/png";
		else if (ext === ".webp") contentType = "image/webp";
		else if (ext === ".svg") contentType = "image/svg+xml";

		console.log(`Uploading ${file}...`);

		const { data, error } = await supabase.storage
			.from(bucketName)
			.upload(file, fileBuffer, {
				contentType,
				upsert: true,
			});

		if (error) {
			console.error(`Failed to upload ${file}: ${error.message}`);
		} else {
			console.log(`Success: ${file}`);
		}
	}
}

uploadImages();
