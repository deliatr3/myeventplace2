<script>
	let { data } = $props();
	let organizer = data.organizer;
	import KontaktFormular from "$lib/components/KontaktFormular.svelte"; //Import der Komponente Kontaktformular
</script>

<!-- Wenn Veranstalter gefunden wurde -->
{#if organizer}
	<section class="container py-5">
		<h1>{organizer.name}</h1>

		<!-- Veranstalterbild -->
		<img
			src={`/images/${organizer.bild ?? "default.jpg"}`}
			alt={organizer.name}
			style="max-width: 300px;"
		/>
		<!-- Biografie -->
		<p>{organizer.bio}</p>
		<p>
			<a href={`mailto:${organizer.email}`}>{organizer.email}</a>
			<!-- Mailto: Funktion -->
		</p>

		<!-- Eingebundenes Kontaktformular -->
		<KontaktFormular email={organizer.email} />
	</section>

	<!-- Wenn kein Veranstalter gefunden wurde -->
{:else}
	<p>Veranstalter nicht gefunden.</p>
{/if}
