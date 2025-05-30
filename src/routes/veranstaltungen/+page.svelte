<script>
	let { data: pageData } = $props();
	const { events } = pageData;

	let selectedOrt = $state("Alle"); //Anzeige des aktuell ausgewählten Ort
	let searchQuery = $state(""); //Anzeige des aktuell gewählten Suchbegriff

	//Filter für Ort-Buttons
	function setFilter(ort) {
		selectedOrt = ort;
	}

	//Kombinierte Filterfunktion für Ort und Textsuche
	function filterEvents(array, query) {
		return array.filter((event) => {
			const matchesOrt =
				selectedOrt === "Alle" || event.venue === selectedOrt;
			const matchesSearch = Object.values(event).some((value) =>
				String(value).toLowerCase().includes(query.toLowerCase()),
			);
			return matchesOrt && matchesSearch;
		});
	}

	//Alle vorhandenen Orte für Button-Filter extrahieren
	let orte = $derived.by(() => {
		const unique = new Set(events.map((e) => e.venue));
		return ["Alle", ...Array.from(unique)];
	});

	//Datumsformatierung
	function formatDate(d) {
		return d;
	}
</script>

<!-- Seitentitel -->
<h1 class="mb-4">Alle Veranstaltungen</h1>

<!-- Filter-Buttons nach Veranstaltungsort -->
<div class="mb-3 d-flex flex-wrap gap-2">
	{#each orte as ort}
		<button
			type="button"
			class={`btn btn-outline-primary ${selectedOrt === ort ? "active" : ""}`}
			onclick={() => setFilter(ort)}
		>
			{ort}
		</button>
	{/each}
</div>

<!-- Textsuche nach Titel, Ort, Datum -->
<div class="mb-4">
	<input
		type="text"
		class="form-control"
		placeholder="Suche nach Titel, Ort, Datum ..."
		bind:value={searchQuery}
	/>
</div>

<!-- Event-Karten (nach Filter & Suche)-->
<div class="row row-cols-1 row-cols-md-3 g-4">
	{#each filterEvents(events, searchQuery) as e}
		<div class="col">
			<div class="card h-100 shadow-sm">
				<div class="card-body d-flex flex-column">
					<h5 class="card-title">{e.title}</h5>
					<p class="card-text mb-1">
						<strong>Datum:</strong>
						{formatDate(e.date)}
					</p>
					<p class="card-text mb-1">
						<strong>Uhrzeit:</strong>
						{e.time}
					</p>
					<p class="card-text mb-1">
						<strong>Ort:</strong>
						{e.venue}
					</p>
					<p class="card-text mb-3">
						<strong>Dauer:</strong>
						{e.duration} Stunden
					</p>
					<div class="mt-auto">
						<a
							href={`/veranstaltungen/${e._id}`}
							class="btn btn-primary w-100"
						>
							Details & Anmeldung
						</a>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
