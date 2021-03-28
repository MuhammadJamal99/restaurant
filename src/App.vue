<template>
  <div id="app">
    <app-header />
    <div id="app-body" v-darkmode>
      <router-view />
    </div>
    <app-footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "./assets/fonts/fonts.css";
import "./fontAwesomeSetup";
import Header from "./components/global/TheHeader";
import Footer from "./components/global/TheFooter";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  computed: {
    ...mapGetters(["darkMode"]),
  },
};
</script>

<style lang="scss">
@import "./assets/scss/utilities.scss";

body {
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
a {
  font-family: "Sriracha", cursive;
}

#app {
  min-width: 350px;

  #app-body {
    padding-top: 5rem;
    &.dark-mode {
      background-color: #000;
    }
  }
}

* {
  transition: color 0.2s, background-color 0.5s;
}
</style>
