<script>
	let { email, form = {} } = $props(); // Veranstalter-E-Mail
</script>

<!--  Kontaktformular -->
<h2 class="mt-5">Kontakt aufnehmen</h2>
<form method="POST" use:enhance>
	<input type="hidden" name="to" value={email} />

	<!-- Absendername -->
	<div class="mb-3">
		<label for="name">Dein Name*</label>
		<input
			id="name"
			type="text"
			name="name"
			class="form-control"
			required
		/>
	</div>

	<!-- Absender-E-Mail -->
	<div class="mb-3">
		<label for="from">Deine E-Mail*</label>
		<input
			id="from"
			type="email"
			name="from"
			class="form-control"
			required
		/>
	</div>

	<!-- Nachrichtentext -->
	<div class="mb-3">
		<label for="message">Nachricht*</label>
		<textarea
			id="message"
			name="message"
			class="form-control"
			rows="4"
			required
		></textarea>
	</div>

	<!-- Absenden -->
	<button class="btn btn-pink">Nachricht senden</button>
</form>

<!-- Rückmeldung -->
{#if form?.success}
	<div class="alert alert-success mt-3">
		Deine Nachricht wurde erfolgreich gesendet!
	</div>
{:else if form?.error}
	<div class="alert alert-danger mt-3">
		Fehler: {form.result.error}
	</div>
{/if}
