<script>
    import Calendar from "$lib/components/Terminkalender.svelte";
     let { data:pageData } = $props();
    const { events } = pageData;
   
</script>

<!-- Intro-Bereich ohne eigene Komponente -->
<section class="intro-section">
  <div class="intro-text">
    <h1>Willkommen bei MyEventPlace!</h1>
    <p>
      Entdecke spannende Veranstaltungen in deiner Nähe und
      melde dich direkt über unsere Website an.
    </p>
    <a href="/veranstaltungen" class="btn btn-light btn-lg mb-5">
      Zu den Veranstaltungen
    </a>
  </div>

<div class="col-md-6 d-flex justify-content-start mt-5 mt-md-0">
    <img src="/images/hero-event.jpg" alt="Event-Szene" class="img-fluid" style="max-width: 50%" />
  </div>
</section>

<section class="mt-5 container">
  <h2 class="mb-4">Terminkalender</h2>
  <Calendar {events} />
</section>