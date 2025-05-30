<script>
    let { eventId, form } = $props();
</script>

<!-- Formular zur Event-Anmeldung -->
<form method="POST" action="?/register" use:enhance>
    <div class="mb-3">
        <div class="mb-3">
            <!-- Vorname -->
            <label for="vorname" class="form-label">Vorname*</label>
            <input
                id="vorname"
                name="vorname"
                type="text"
                class="form-control"
                required
            />
        </div>

        <!-- Nachname -->
        <div class="mb-3">
            <label for="name" class="form-label">Name*</label>
            <input
                id="name"
                name="name"
                type="text"
                class="form-control"
                required
            />
        </div>

        <!-- E-Mail-Adresse -->
        <div class="mb-3">
            <label for="email" class="form-label">E-Mail*</label>
            <input
                id="email"
                name="email"
                type="email"
                class="form-control"
                required
            />
        </div>

        <!-- Telefonnummer (optional) -->
        <div class="mb-3">
            <label for="telefon" class="form-label">Telefonnummer</label>
            <input
                id="telefon"
                name="telefon"
                type="text"
                class="form-control"
            />
        </div>

        <!-- Zustimmung zur verbindlichen Anmeldung -->
        <div class="form-check mb-3">
            <input
                class="form-check-input"
                type="checkbox"
                name="verbindlich"
                id="verbindlich"
                required
            />
            <label class="form-check-label" for="verbindlich">
                Ich melde mich verbindlich für den Event an*
            </label>
        </div>

        <!-- Absenden -->
        <button type="submit" name="register" class="btn btn-primary">
            Anmelden
        </button>

        <!-- Erfolgs- oder Fehlermeldung -->
        {#if form?.success}
            <p class="alert alert-success mt-3">
                Danke für deine verbindliche Anmeldung!
            </p>
        {/if}

        {#if form?.error}
            <div class="text-danger mt-2">{form.error}</div>
        {/if}
    </div>
</form>
