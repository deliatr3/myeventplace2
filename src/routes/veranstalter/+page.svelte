<script>
  let { data } = $props();
  let organizers = data.organizers;

  let selectedOrt = $state("Alle"); //Anzeige des aktuell ausgewählten Ort
  let searchQuery = $state(""); //Anzeige des aktuell gewählten Suchbegriff

  //Orte extrahieren aus Beschreibung
  let orte = $derived.by(() => {
    const unique = new Set(
      organizers.map((o) => {
        const match = o.bio.match(/in ([A-ZÄÖÜa-zäöüß\s]+?) mit/); //Regex-Funktion
        return match?.[1] ?? "Unbekannt";
      }),
    );
    return ["Alle", ...Array.from(unique)];
  });

  //Filter-Funktion für Ort und Suchtext
  function filteredOrganizers() {
    return organizers.filter((o) => {
      const matchOrt = selectedOrt === "Alle" || o.bio.includes(selectedOrt);
      const matchText = Object.values(o).some((v) =>
        String(v).toLowerCase().includes(searchQuery.toLowerCase()),
      );
      return matchOrt && matchText;
    });
  }
</script>

<!-- Überschrift -->
<h1>Entdecke verschiedene Veranstalter</h1>

<!-- Filterbereich (Ort + Freitext)-->
<div class="container mb-4">
  <div class="d-flex flex-wrap gap-2 mb-3">
    {#each orte as ort}
      <button
        type="button"
        class={`btn btn-outline-primary ${selectedOrt === ort ? "active" : ""}`}
        onclick={() => (selectedOrt = ort)}
      >
        {ort}
      </button>
    {/each}
  </div>

  <!-- Suchfeld -->
  <input
    type="text"
    class="form-control"
    placeholder="Suche nach Name, Ort, Bio …"
    bind:value={searchQuery}
  />
</div>

<!-- Veranstalter-Liste -->
{#if organizers.length === 0}
  <p style="color: red;">⚠️ Es wurden keine Veranstalter gefunden.</p>
{:else}
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem;">
    {#each filteredOrganizers() as o}
      <div
        style="border: 1px solid #ccc; padding: 1rem; width: 240px; display: flex; flex-direction: column;"
      >
        <!-- Veranstalterkarte -->
        <img
          src={`/images/${o.bild ?? "default.jpg"}`}
          alt={o.name}
          style="width: 100%; height: auto;"
        />
        <h3>{o.name}</h3>
        <p>{o.bio}</p>
        <small>{o.email}</small>

        <!-- Button zur Detailseite des Veranstalters -->
        <div style="margin-top: auto;">
          <a
            href={`/veranstalter/${o._id}`}
            class="btn btn-sm btn-outline-primary w-100"
          >
            Details anzeigen
          </a>
        </div>
      </div>
    {/each}
  </div>
{/if}
