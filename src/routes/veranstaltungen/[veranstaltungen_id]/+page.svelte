<script>
  let { data, form } = $props();
  let event = data.event;

  import RegistrationsFormular from "$lib/components/RegistrationsFormular.svelte";
</script>

{#if event}
  <article class="prose mx-auto p-4">
    <h1>{event.title}</h1>
    <p><strong>Beschreibung:</strong> {event.description}</p>
    <p><strong>Datum:</strong> {event.date}</p>
    <p><strong>Uhrzeit:</strong> {event.time}</p>
    <p><strong>Ort:</strong> {event.venue}</p>
    <p><strong>Dauer:</strong> {event.duration} Stunden</p>
  </article>

  <!-- 🔽 Hier kommt das Formular rein -->
  <RegistrationsFormular eventId={event._id} />
{:else}
  <p>Event nicht gefunden.</p>
{/if}
