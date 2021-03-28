<template>
  <section class="menu-section" v-darkmode>
    <h2 class="title">{{ title }}</h2>
    <div class="menu-items-container">
      <menu-item
        v-for="item of items"
        :key="item.id"
        :name="item.name"
        :imageSrc="item.imageSrc"
        :price="item.price"
        :description="item.description"
      />
    </div>
  </section>
</template>

<script>
import MenuItem from "./MenuItem";
export default {
  components: {
    "menu-item": MenuItem,
  },
  props: ["title", "items"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.menu-section {
  margin: 7rem 2rem;
  .title {
    margin-bottom: 0;
  }

  &.dark-mode {
    .title {
      color: $darkMode-secondColor;
    }
  }
}

.menu-items-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  & > * {
    margin: 2rem;
    flex-shrink: 0;
  }
}
</style>
