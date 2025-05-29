import db from '$lib/db.js';

export async function load() {
	const organizers = await db.getOrganizers();
	console.log('Loaded organizers in server:', organizers);
	return { organizers };
}
