<script>
	let { data } = $props();
	let organizer = data.organizer;
	import KontaktFormular from '$lib/components/KontaktFormular.svelte';
</script>

{#if organizer}
	<section class="container py-5">
		<h1>{organizer.name}</h1>

		<img
			src={`/images/${organizer.bild ?? 'default.jpg'}`}
			alt={organizer.name}
			style="max-width: 300px;"
		/>

		<p>{organizer.bio}</p>
		<p>
			<a href={`mailto:${organizer.email}`}>{organizer.email}</a>
		</p>

		<!-- Eingebundenes Kontaktformular -->
		<KontaktFormular email={organizer.email} />
	</section>
{:else}
	<p>Veranstalter nicht gefunden.</p>
{/if}
