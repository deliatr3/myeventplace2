<script>
   let { data: pageData } = $props();
    const { events } = pageData;


     // Hilfsfunktion für lokales Datumsformat (falls nötig)
  function formatDate(d) {
    // wenn du Strings dd.mm.yyyy speicherst, gib sie einfach zurück:
    return d;
    // oder für ISO-Daten:
    // return new Date(d).toLocaleDateString();
  }
</script>

<div class="container py-4">
  <h1 class="mb-4">Alle Veranstaltungen</h1>

  <div class="row row-cols-1 row-cols-md-3 g-4">
    {#each events as e}
      <div class="col">
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{e.title}</h5>
            <p class="card-text mb-1"><strong>Datum:</strong> {formatDate(e.date)}</p>
            <p class="card-text mb-1"><strong>Uhrzeit:</strong> {e.time}</p>
            <p class="card-text mb-1"><strong>Ort:</strong> {e.venue}</p>
            <p class="card-text mb-3"><strong>Dauer:</strong> {e.duration} Stunden</p>
            <!-- Spacer, damit Button immer unten klebt -->
            <div class="mt-auto">
              <a href={`/veranstaltungen/${e._id}`} class="btn btn-primary w-100">
                Details & Anmeldung
              </a>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>