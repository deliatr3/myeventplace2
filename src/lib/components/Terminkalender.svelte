<script>
  let { events = [] } = $props();

  // Hilfsfunktion, damit dein dd/mm/yyyy als Datum funktioniert
  function parseDMY(dmy) {
    const [dd, mm, yyyy] = typeof dmy === 'string'
      ? dmy.split('/').map(Number)
      : [];
    return dd && mm && yyyy
      ? new Date(yyyy, mm - 1, dd)
      : new Date(dmy); // Fallback auf native Parsing
  }

  // Sortieren nach Datum
  let sorted = $derived(events
    .map(e => ({ ...e, _date: parseDMY(e.date) }))
    .sort((a, b) => a._date - b._date));
</script>

<table class="table table-hover">
  <thead>
    <tr>
      <th>Datum</th>
      <th>Titel</th>
      <th>Ort</th>   
    </tr>
  </thead>
  <tbody>
    {#each sorted as e}
      <tr>
        <td>
          {#if !isNaN(e._date)}
            {e._date.toLocaleDateString()}
          {:else}
            (kein Datum)
          {/if}
        </td>
        <td>{e.title}</td>
        <td>{e.venue}</td>  <!-- hier dein neues Feld ausgeben -->
      </tr>
    {/each}
  </tbody>
</table>
