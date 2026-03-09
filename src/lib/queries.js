import supabase from "./supabase";

// --- Cars / Inventory ---

export const getInventory = async () => {
	const { data, error } = await supabase
		.from("cars")
		.select("*")
		.order("created_at", { ascending: false });

	if (error) throw error;
	return data;
};

export const getFeaturedCars = async () => {
	const { data, error } = await supabase
		.from("cars")
		.select("*")
		.eq("is_featured", true)
		.limit(3);

	if (error) throw error;
	return data;
};

export const getCarById = async (id) => {
	const { data, error } = await supabase
		.from("cars")
		.select("*")
		.eq("id", id)
		.single();

	if (error) throw error;
	return data;
};

// --- Forms ---

export const submitContactForm = async (formData) => {
	// formData should be an object like: { first_name, last_name, email, phone, message }
	const { data, error } = await supabase.from("contacts").insert([formData]);

	if (error) throw error;
	return data;
};

export const subscribeToNewsletter = async (email) => {
	const { data, error } = await supabase
		.from("subscribers")
		.insert([{ email }]);

	if (error) throw error;
	return data;
};
