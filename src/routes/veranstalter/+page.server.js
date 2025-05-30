import db from '$lib/db.js';

//ladet alle Veranstalter aus der MongoDB Datenbank
export async function load() {
	const organizers = await db.getOrganizers();
	return { organizers };
}
