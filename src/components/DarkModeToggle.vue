<template>
  <div id="dark-mode-toggle" v-darkmode>
    <label>
      <input class="hidden-checkbox" type="checkbox" v-model="darkMode" />
      <div class="toggle-base">
        <div class="toggle-ball"></div>
      </div>
    </label>
    <span class="text">Light/Dark</span>
  </div>
</template>

<script>
export default {
  computed: {
    darkMode: {
      get: function () {
        return this.$store.getters.darkMode;
      },
      set: function (value) {
        this.$store.commit("set_darkMode", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

#dark-mode-toggle {
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 650px) {
    margin-bottom: 2rem;
  }

  .hidden-checkbox {
    position: absolute;
    visibility: hidden;
  }

  .toggle-base {
    cursor: pointer;
    width: 2rem;
    height: 0.8rem;
    background-color: rgb(71, 71, 71);
    border: 1px solid #000;
    position: relative;
    border-radius: 10px;

    .toggle-ball {
      position: absolute;
      top: -0.19rem;
      left: -0.2rem;
      width: 1.1rem;
      height: 1.1rem;
      background-color: #fff;
      border: 1px solid #000;
      border-radius: 50%;
      transition: left 0.2s cubic-bezier(0, 0, 0, 1);
    }
  }

  .text {
    position: relative;
    left: 0.4rem;
  }
}

#dark-mode-toggle.dark-mode {
  .toggle-base {
    background-color: rgb(190, 190, 190);

    .toggle-ball {
      left: 1rem;
      background-color: #000;
      border-color: #fff;
    }
  }

  .text {
    color: $darkMode-firstColor;
  }
}
</style>