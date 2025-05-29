<script>
  import Calendar from "$lib/components/Terminkalender.svelte";
  let { data: pageData } = $props();
  const { events } = pageData;
</script>

<!-- Intro-Bereich ohne eigene Komponente -->
<section class="intro-section">
  <div class="intro-text">
    <h1>Willkommen bei MyEventPlace!</h1>
    <p>
      Entdecke spannende Veranstaltungen in deiner Nähe und melde dich direkt
      über unsere Website an.
    </p>
  </div>

</section>
<section class="container mb-5">
	<div class="row justify-content-center text-center">
		<!-- Veranstaltung -->
		<div class="col-md-4 mb-4">
			<img src="/images/hero-event.jpg" alt="Event" class="hero-img mb-3" />
			<a href="/veranstaltungen" class="btn btn-pink">Zu den Veranstaltungen</a>
		</div>

		<!-- Lieblingsvenues -->
		<div class="col-md-4 mb-4">
			<img src="/images/venue.jpg" alt="Venue" class="hero-img mb-3" />
			<a href="/lieblingsvenues" class="btn btn-pink">Zu meinen Lieblings-Venues</a>
		</div>

		<!-- Veranstalter -->
		<div class="col-md-4 mb-4">
			<img src="/images/organizer.jpg" alt="Veranstalter" class="hero-img mb-3" />
			<a href="/veranstalter" class="btn btn-pink">Zu den Veranstaltern</a>
		</div>
	</div>
</section>


<section class="mt-5 container">
  <h2 class="mb-4">Terminkalender</h2>
  <Calendar {events} />
</section>
