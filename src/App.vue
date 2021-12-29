<template>

  <router-view v-slot="{Component}">
    <transition name="slide">
      <component :is="Component"/>
    </transition>
  </router-view>

  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}
.wrapper {
  width: 100%;
  min-height: 100vh;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}


.slide-enter-from {
  position: absolute;
  right: -100%;
}


.slide-leave-to {
  position: absolute;
  left: -100%;
}


.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
