import db from '$lib/db.js';

export async function load() {
	const organizers = await db.getOrganizers();
	return { organizers };
}
