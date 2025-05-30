<script>
  let { data, form } = $props();
  let event = data.event;

  import RegistrationsFormular from "$lib/components/RegistrationsFormular.svelte"; //Import der Komponente Registrationsformular
</script>

{#if event}
  <!-- Eventdetails anzeigen -->
  <article class="prose mx-auto p-4">
    <h1>{event.title}</h1>
    <p><strong>Beschreibung:</strong> {event.description}</p>
    <p><strong>Datum:</strong> {event.date}</p>
    <p><strong>Uhrzeit:</strong> {event.time}</p>
    <p><strong>Ort:</strong> {event.venue}</p>
    <p><strong>Dauer:</strong> {event.duration} Stunden</p>
  </article>

  <!-- Eingebettetes Anmeldeformular -->
  <RegistrationsFormular eventId={event._id} form={form}/>

{:else}
  <!-- Fehleranzeige, falls Event nicht existiert -->
  <p>Event nicht gefunden.</p>
{/if}
