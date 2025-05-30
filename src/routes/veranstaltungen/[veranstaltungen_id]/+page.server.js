import db from "$lib/db";

//ladet alle  und deren Details aus der MongoDB Datenbank
export async function load({ params }) {
    return {
        event: await db.getEvent(params.veranstaltungen_id),
    }
}

//verarbeitet die serverseitige Absendung des Formulars 
export const actions = {
    register: async ({ request }) => {
        const formData = await request.formData();

        //extrahiert die Registrierung aus dem Formular
        const registration = {
            eventId: formData.get('eventId'),
            vorname: formData.get('vorname'),
            name: formData.get('name'),
            email: formData.get('email'),
            telefon: formData.get('telefon')
        };

        try {
            //Speicherung der Daten in MongoDB
            await db.saveRegistration(registration);
            return { success: true }; //Erfolgsmeldung 
        } catch (err) { //Fehlermeldung und Fehlerbehandlung 
            console.error('Registrierung fehlgeschlagen:', err);
            return { success: false, error: 'Registrierung fehlgeschlagen.' };
        }
    }
};