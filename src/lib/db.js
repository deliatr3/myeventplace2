// ⛓ Verbindung zur MongoDB herstellen
import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

// MongoDB-Verbindung & Datenbank initialisieren
const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("EventPlaner");

// -----------------------------------------
// EVENTS
// -----------------------------------------

// Gibt alle Events zurück (inkl. _id als String)
async function getEvents() {
  try {
    const collection = db.collection("events");
    const events = await collection.find({}).toArray();
    return events.map((event) => ({
      ...event,
      _id: event._id.toString()
    }));
  } catch (error) {
    console.error("Fehler beim Laden der Events:", error);
    return [];
  }
}

// Gibt ein einzelnes Event basierend auf der ID zurück
async function getEvent(id) {
  try {
    const collection = db.collection("events");
    const event = await collection.findOne({ _id: new ObjectId(id) });
    if (event) event._id = event._id.toString();
    return event;
  } catch (error) {
    console.error("Fehler beim Laden eines Events:", error);
    return null;
  }
}

// Speichert eine Event-Registrierung mit Zeitstempel
async function saveRegistration(registration) {
  try {
    const collection = db.collection("registrations");
    await collection.insertOne({
      ...registration,
      timestamp: new Date()
    });
  } catch (error) {
    console.error("Fehler beim Speichern der Registrierung:", error);
    throw error;
  }
}

// -----------------------------------------
// LIEBLINGS-VENUES
// -----------------------------------------

// Gibt alle gespeicherten Favoriten (Venues) zurück
async function getFavorites() {
  try {
    const collection = db.collection("venues");
    const venues = await collection.find({}).toArray();
    return venues.map((v) => ({
      ...v,
      _id: v._id.toString()
    }));
  } catch (error) {
    console.error("Fehler beim Laden der Venues:", error);
    return [];
  }
}

// Speichert einen neuen Lieblings-Venue
async function saveFavorite(venue) {
  try {
    const collection = db.collection("venues");
    await collection.insertOne({
      ...venue,
      timestamp: new Date()
    });
  } catch (error) {
    console.error("Fehler beim Speichern der Venue:", error);
    throw error;
  }
}

// Löscht einen Favoriten anhand seiner ID
export async function deleteFavorite(id) {
  try {
    return await db.collection("venues").deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.error("Fehler beim Löschen des Favoriten:", error);
    throw error;
  }
}

// -----------------------------------------
// VERANSTALTER
// -----------------------------------------

// Gibt alle Veranstalter zurück
async function getOrganizers() {
  try {
    const collection = db.collection("organizers");
    const organizers = await collection.find({}).toArray();
    return organizers.map((o) => ({
      ...o,
      _id: o._id.toString()
    }));
  } catch (error) {
    console.error("Fehler beim Laden der Veranstalter:", error);
    return [];
  }
}

// Gibt einen bestimmten Veranstalter basierend auf ID zurück
async function getOrganizer(id) {
  try {
    const collection = db.collection("organizers");
    const result = await collection.findOne({ _id: new ObjectId(id) });
    if (result) result._id = result._id.toString();
    return result;
  } catch (error) {
    console.error("Fehler beim Laden des Veranstalters:", error);
    return null;
  }
}

// -----------------------------------------
// KONTAKTFORMULAR / NACHRICHTEN
// -----------------------------------------

// Speichert eine Kontakt-Nachricht mit Zeitstempel
async function saveMessage(message) {
  try {
    const collection = db.collection("messages");
    await collection.insertOne({
      ...message,
      timestamp: new Date()
    });
  } catch (error) {
    console.error("Fehler beim Speichern der Nachricht:", error);
    throw error;
  }
}

// -----------------------------------------
// Export aller Funktionen
// -----------------------------------------

export default {
  getEvents,
  getEvent,
  saveRegistration,
  getFavorites,
  saveFavorite,
  deleteFavorite,
  getOrganizers,
  getOrganizer,
  saveMessage
};
