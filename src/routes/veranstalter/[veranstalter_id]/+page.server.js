import db from "$lib/db.js";

//ladet alle Veranstalter und deren Details aus der MongoDB Datenbank
export async function load({ params }) {
	const organizer = await db.getOrganizer(params.veranstalter_id);
	return { organizer };
}

export const actions = {
	// POST-Händler für das Kontaktformular 
	default: async ({ request }) => {
		const formData = await request.formData();

		//extrahiert die Felder aus dem Formular
		const message = {
			to: formData.get('to'),
			from: formData.get('from'),
			name: formData.get('name'),
			message: formData.get('message')
		};

		try {
			//Speichert die Daten in der MongoDB Collection "messages"
			await db.saveMessage(message);
			return { success: true }; //Bei Erfolg
		} catch (err) {
			console.error('Nachricht konnte nicht gespeichert werden:', err);
			return { success: false, error: 'Speichern fehlgeschlagen.' }; //Bei Error
		}
	}
};
