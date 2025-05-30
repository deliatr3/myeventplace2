<script>
	let { email } = $props(); // Veranstalter-E-Mail
</script>


<h2 class="mt-5">Kontakt aufnehmen</h2>
<form method="POST" action="/kontakt" use:enhance>
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

