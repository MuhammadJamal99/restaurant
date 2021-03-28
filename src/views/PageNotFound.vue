<template>
  <div id="page-not-found" class="page" v-darkmode>
    <span class="icon"><FontAwesomeIcon icon="exclamation-triangle" /></span>
    <h1 class="text">404 - Page Not Found</h1>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

#page-not-found {
  height: calc(100vh - 21.68rem);
  min-height: 15rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 650px) {
    height: calc(100vh - 23.65rem);
  }

  .icon {
    font-size: 3rem;
  }

  .text {
    margin: 0;
    text-align: center;
  }

  &.dark-mode {
    color: $darkMode-firstColor;
  }
}
</style>