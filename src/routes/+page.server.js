import db from '$lib/db.js';

//ladet alle Events aus der MongoDB Datenbank
export async function load() { 
    return {
        events: await db.getEvents()

    }
}