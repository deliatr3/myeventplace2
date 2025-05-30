import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";


const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("EventPlaner");



// liefert alle Events als Plain Objects (inkl. _id als String)
async function getEvents() {
  let events = [];
  try {
    const collection = db.collection('events');
    const query = {};
    events = await collection.find(query).toArray();
    events.forEach(event => {
      event._id = event._id.toString(); //convert ObjectId to String 
    });

  } catch (error) {
    console.error('Fehler beim Laden der Events:', error);
  }
  return events;
}

async function getEvent(id) {
  let event = null;
  try {
    const collection = db.collection("events");
    const query = { _id: new ObjectId(id) };
    event = await collection.findOne(query);

    if (!event) {
      console.log("no event with id " + id);

    } else {
      event._id = event._id.toString();
    }
  } catch (error) {
    console.log(error.message);
  }

return event;
}

async function saveRegistration(registration) {
	try {
		const collection = db.collection('registrations');
		await collection.insertOne({
			...registration,
			timestamp: new Date()
		});
	} catch (error) {
		console.error('Fehler beim Speichern der Registrierung:', error);
		throw error;
	}
}

async function getFavorites() {
  let venues = [];
  try {
    const collection = db.collection('venues');
    const query = {};
    venues = await collection.find(query).toArray();
    venues.forEach(venue => {
      venue._id = venue._id.toString(); //convert ObjectId to String 
    });

  } catch (error) {
    console.error('Fehler beim Laden der Venues: ', error);
  }
  return venues;
}

async function saveFavorite(venue) {
	try {
		const collection = db.collection('venues');
		await collection.insertOne({
			...venue,
			timestamp: new Date()
		});
	} catch (error) {
		console.error('Fehler beim Speichern der Venue: ', error);
		throw error;
	}
}

export async function deleteFavorite(id) {
	try {
		return await db.collection('venues').deleteOne({ _id: new ObjectId(id) });
	} catch (err) {
		console.error('Fehler beim Löschen des Favoriten:', err);
		throw err;
	}
}

async function getOrganizers() {
  let organizers = [];
  try {
    const collection = db.collection('organizers');
    const query = {};
    organizers = await collection.find(query).toArray();
    organizers.forEach(organizer => {
      organizer._id = organizer._id.toString();
    });
  } catch (error) {
    console.error('Fehler beim Laden der Veranstalter:', error);
  }
  return organizers;
}

async function getOrganizer(id) {
	try {
		const collection = db.collection("organizers");
		const result = await collection.findOne({ _id: new ObjectId(id) });
		if (result) result._id = result._id.toString();
		return result;
	} catch (err) {
		console.error("Fehler beim Laden des Veranstalters:", err);
		return null;
	}
}

async function saveMessage(message) {
	try {
		const collection = db.collection('messages');
		await collection.insertOne({
			...message,
			timestamp: new Date()
		});
	} catch (error) {
		console.error('Fehler beim Speichern der Nachricht:', error);
		throw error;
	}
}



export default { getEvents, getEvent, saveRegistration, getFavorites, saveFavorite, deleteFavorite, getOrganizers, getOrganizer, saveMessage }