<template>
  <nav
    class="container-fluid navbar navbar-expand-lg navbar-light bg-white mb-2"
  >
    <div
      class="col collapse navbar-collapse d-flex justify-content-start"
      id="navbarNavAltMarkup"
    >
      <div class="navbar-nav">
        <a class="navbar-brand" href="#">
          <img
            src="./assets/logoNome.png"
            width="60"
            height="50"
            class="d-inline-block align-center"
            alt=""
          />
        </a>
      </div>
    </div>
    <!-- <div
      class="col collapse navbar-collapse d-flex justify-content-end"
      id="navbarNavAltMarkup"
    >
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#"
          >Home <span class="sr-only">(current)</span></a
        >
        <a class="nav-item nav-link" href="#">Features</a>
        <a class="nav-item nav-link" href="#">Pricing</a>
        <a class="nav-item nav-link disabled" href="#">Disabled</a>
      </div>
    </div> -->
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e2e2e2;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.nav {
  background-color: white !important;
}
</style>
