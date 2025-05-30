import db from '$lib/db.js';

//Lädt alle gespeicherten Lieblings-Venues aus der MongoDB
export const load = async () => {
	return {
		favorites: await db.getFavorites()
	};
};

export const actions = {
	//Fügt einen neuen Venue zur Favoritenliste hinzu
	add: async ({ request }) => {
		const form = await request.formData();

		//Neuer Favorit mit Name, Adresse und aktuellem Timestamp
		await db.saveFavorite({
			name: form.get('name'),
			address: form.get('address'),
			timestamp: new Date()
		});
	},
	// Löscht einen Venue anhand seiner ID aus der Favoritenliste
	delete: async ({ request }) => {
		const form = await request.formData();
		await db.deleteFavorite(form.get('id'));
	}
};
