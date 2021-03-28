<template>
  <section class="delivery-step" v-darkmode>
    <div class="icon-container">
      <span class="icon"><FontAwesomeIcon :icon="icon" /></span>
    </div>
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon,
  },
  props: ["icon"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.delivery-step {
  display: flex;
  justify-content: center;
  align-items: center;

  & > .icon-container {
    color: $secondColor;
    background-color: #ebd13e;
    padding: 2rem;
    margin: 2rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 15px solid $firstColor;
    border-radius: 50%;
    font-size: 4rem;
  }

  & > .content {
    width: 20rem;
  }

  &.dark-mode > .icon-container {
    color: $secondColor;
    background-color: #00000000;
    border: 15px solid #ffc17587;
  }
}
</style>
