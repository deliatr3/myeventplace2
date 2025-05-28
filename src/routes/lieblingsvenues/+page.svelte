<script>
	let { data, form } = $props();
	let favorites = data.favorites;
</script>

<h1>Meine Lieblings-Venues</h1>
<h3>Füge neue Venues zu deiner Liste hinzu, um weitere Vorschläge für Events zu erhalten</h3>

<p style="margin-top: 2rem;"> </p>

<form method="POST" action="?/add">
	<input name="name" placeholder="Name" />
	<input name="address" placeholder="Adresse" />
	<button type="submit" class="btn">Hinzufügen</button>
</form>

<p style="margin-top: 2rem;">Hier siehst du deine gespeicherten Lieblings-Venues:</p>


{#each favorites as v}
	<div class="venue-card">
		<h3>{v.name} - {v.address}</h3>
		<form method="POST" action="?/delete">
			<input type="hidden" name="id" value={v._id} />
			<button type="submit" class="btn">Entfernen</button>
		</form>
	</div>
{/each}
