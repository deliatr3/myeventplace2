<script>
  import "./styles.css";
  import "bootstrap/dist/css/bootstrap.min.css";
  let { children } = $props();
</script>

<header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-pink">
    <div class="container">
         <a class="navbar-brand p-0" href="/">
      <img
        src="/images/MyEventPlaceLogo.png"
        alt="My EventPlace Logo"
        style="height: 100px;"
      />
    </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-label="Navigation umschalten"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="/veranstaltungen">Veranstaltungen</a></li>
          <li class="nav-item"><a class="nav-link" href="/lieblingsvenues">Meine Lieblings-Venues</a></li>
          <li class="nav-item"><a class="nav-link" href="/veranstalter">Entdecke verschiedene Veranstalter</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>

<div class="container mt-3">
  {@render children()}
</div>
