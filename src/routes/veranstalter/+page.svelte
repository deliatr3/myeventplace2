<script>
  let { data } = $props();
	let organizers = data.organizers;
</script>


<h1>Entdecke verschiedene Veranstalter</h1>

{#if organizers.length === 0}
  <p style="color: red;">⚠️ Es wurden keine Veranstalter gefunden.</p>
{:else}
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem;">
    {#each organizers as o}
      <div style="border: 1px solid #ccc; padding: 1rem; width: 240px;">
        <img src={`/images/${o.bild ?? 'default.jpg'}`} alt={o.name} style="width: 100%; height: auto;" />
        <h3>{o.name}</h3>
        <p>{o.bio}</p>
        <small>{o.email}</small>
      </div>
    {/each}
  </div>
{/if}
