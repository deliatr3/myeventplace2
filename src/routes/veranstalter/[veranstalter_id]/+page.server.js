import db from "$lib/db.js";

export async function load({ params }) {
	const organizer = await db.getOrganizer(params.veranstalter_id);
	return { organizer };
}

export const actions = {
	// bleibt unverändert
	default: async ({ request }) => {
		const formData = await request.formData();

		const message = {
			to: formData.get('to'),
			from: formData.get('from'),
			name: formData.get('name'),
			message: formData.get('message')
		};

		try {
			await db.saveMessage(message);
			return { success: true };
		} catch (err) {
			console.error('Nachricht konnte nicht gespeichert werden:', err);
			return { success: false, error: 'Speichern fehlgeschlagen.' };
		}
	}
};
