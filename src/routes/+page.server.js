import db from '$lib/db.js';

export async function load() {
    return {
        events: await db.getEvents()

    }
}