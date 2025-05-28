import db from "$lib/db";

export async function load({ params }) {
    return {
        event: await db.getEvent(params.veranstaltungen_id),
    }
}

export const actions = {
    register: async ({ request }) => {
        const formData = await request.formData();

        const registration = {
            eventId: formData.get('eventId'),
            vorname: formData.get('vorname'),
            name: formData.get('name'),
            email: formData.get('email'),
            telefon: formData.get('telefon')
        };

        try {
            await db.saveRegistration(registration); // Funktion schreiben wir gleich
            return { success: true };
        } catch (err) {
            console.error('Registrierung fehlgeschlagen:', err);
            return { success: false, error: 'Registrierung fehlgeschlagen.' };
        }
    }
};