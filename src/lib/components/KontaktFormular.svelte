<script>
	let { email } = $props(); // Veranstalter-E-Mail
    let form = $state();
</script>


<h2 class="mt-5">Kontakt aufnehmen</h2>
 <form method="POST" use:enhance={(e) => (form = e)}>
    	<input type="hidden" name="to" value={email} />

	<div class="mb-3">
		<label for="name">Dein Name*</label>
		<input id="name" type="text" name="name" class="form-control" required />
	</div>

	<div class="mb-3">
		<label for="from">Deine E-Mail*</label>
		<input id="from" type="email" name="from" class="form-control" required />
	</div>

	<div class="mb-3">
		<label for="message">Nachricht*</label>
		<textarea id="message" name="message" class="form-control" rows="4" required></textarea>
	</div>

	<button class="btn btn-pink">Nachricht senden</button>
</form>

{#if form?.success}
	<div class="alert alert-success mt-3">
		Deine Nachricht wurde erfolgreich gesendet!
	</div>
{:else if form?.error}
	<div class="alert alert-danger mt-3">
		Fehler: {form.result.error}
	</div>
{/if}




