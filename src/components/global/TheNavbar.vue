<template>
  <nav :class="navMenuClass" v-darkmode>
    <div
      class="link"
      :class="{ 'router-link-exact-active': $route.path === '/' }"
    >
      <router-link to="/">Home</router-link>
    </div>
    <div
      class="link"
      :class="{ 'router-link-exact-active': $route.path === '/menu' }"
    >
      <router-link to="/menu">Menu</router-link>
    </div>
    <div
      class="link"
      :class="{ 'router-link-exact-active': $route.path === '/delivery' }"
    >
      <router-link to="/delivery">Delivery</router-link>
    </div>
    <div
      class="link"
      :class="{ 'router-link-exact-active': $route.path === '/about' }"
    >
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      menuHasBeenSmaller: false,
    };
  },
  computed: {
    navMenuClass: function () {
      let resultClass = "";
      if (this.smallerMenu) {
        resultClass += " smaller-menu";
      } else if (this.menuHasBeenSmaller) {
        resultClass += " normal-menu";
      }
      return resultClass;
    },
  },
  watch: {
    smallerMenu: function (newValue) {
      if (newValue) {
        this.menuHasBeenSmaller = true;
      }
    },
  },
  props: ["smaller-menu"],
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

nav {
  display: flex;

  @media (max-width: 800px) {
    opacity: 0;
    width: 0;
    z-index: -1;
  }

  .link {
    padding: 1rem 0.5rem;
    &.router-link-exact-active {
      &::after {
        content: "";
        display: block;
        width: 80%;
        height: 2px;
        margin: auto;
        margin-top: 5px;
        background-color: $secondColor;
        animation: link-underline 0.5s cubic-bezier(0, 0.8, 1, 0.85);
      }
      a {
        color: $secondColor;
      }
    }

    a {
      color: $firstColor;
      margin: 1rem;
      font-size: 1.2rem;
      text-decoration: none;
      transition: 0.5s;

      &:hover {
        color: $secondColor;
      }
    }
  }

  &.dark-mode {
    .link {
      &.router-link-exact-active {
        &::after {
          background-color: $darkMode-secondColor;
        }
        a {
          color: $darkMode-secondColor;
        }
      }
      a {
        color: $darkMode-firstColor;

        &:hover {
          color: $darkMode-secondColor;
        }
      }
    }
  }
  &.normal-menu .link {
    animation: normal-header-animation-full-menu-link 0.5s ease-in-out forwards;
  }

  &.smaller-menu .link {
    animation: smaller-header-animation-full-menu-link 0.5s ease-in-out forwards;
    &.router-link-exact-active::after {
      margin-top: 0;
    }
  }
}

@keyframes link-underline {
  0% {
    opacity: 0;
    transform: translateY(5px);
  }
  30% {
    opacity: 1;
  }
  70% {
    transform: translateY(-5px);
  }
  80% {
    transform: translateY(2px);
  }
  90% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
}

@mixin smaller-header-styles-full-menu-link {
  padding: 0;
}

@mixin normal-header-styles-full-menu-link {
  padding: 1rem 0.5rem;
}

@keyframes smaller-header-animation-full-menu-link {
  0% {
    @include normal-header-styles-full-menu-link;
    transform: translateY(0px);
  }
  45% {
    @include normal-header-styles-full-menu-link;
    transform: translateY(-10rem);
  }
  50% {
    @include smaller-header-styles-full-menu-link;
  }
  55% {
    transform: translateY(-10rem);
    @include smaller-header-styles-full-menu-link;
  }
  100% {
    transform: translateY(0);
    @include smaller-header-styles-full-menu-link;
  }
}

@keyframes normal-header-animation-full-menu-link {
  0% {
    @include smaller-header-styles-full-menu-link;
    transform: translateY(0px);
  }
  45% {
    @include smaller-header-styles-full-menu-link;
    transform: translateY(-10rem);
  }
  50% {
    @include normal-header-styles-full-menu-link;
  }
  55% {
    transform: translateY(-10rem);
    @include normal-header-styles-full-menu-link;
  }
  100% {
    transform: translateY(0);
    @include normal-header-styles-full-menu-link;
  }
}
</style>
