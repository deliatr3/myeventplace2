import db from '$lib/db.js';

export const load = async () => {
	return {
		favorites: await db.getFavorites()
	};
};

export const actions = {
	add: async ({ request }) => {
		const form = await request.formData();
		await db.saveFavorite({
			name: form.get('name'),
		    address: form.get('address'),
			timestamp: new Date()
		});
	},
	delete: async ({ request }) => {
		const form = await request.formData();
		await db.deleteFavorite(form.get('id'));
	}
};
