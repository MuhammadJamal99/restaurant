<template>
  <div class="hero">
    <div class="centering-container content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("../assets/images/home-hero.jpg") no-repeat left center/cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    color: #fff;
    z-index: 1;
  }

  &::before {
    content: "";
    background-color: #000;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
  }
}
</style>
