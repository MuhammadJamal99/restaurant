<template>
  <footer id="footer" v-darkmode>
    <div class="dark-mode-toggle-container">
      <DarkModeToggle />
    </div>
    <img src="../../assets/images/logo.png" />
    <p class="location">{{ location }}</p>
    <p class="contact">{{ phoneNumber }} | {{ email }}</p>
    <div class="social-media">
      <span class="icon facebook" @click="alertNoSocialImplemented()"
        ><FontAwesomeIcon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />
      </span>
      <span class="icon tripadvisor" @click="alertNoSocialImplemented()">
        <FontAwesomeIcon :icon="{ prefix: 'fab', iconName: 'tripadvisor' }" />
      </span>
      <a target="_blank" :href="githubRepoUrl" class="icon github">
        <FontAwesomeIcon :icon="{ prefix: 'fab', iconName: 'github' }" />
      </a>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import DarkModeToggle from "../DarkModeToggle";

export default {
  data: function () {
    return {
      githubRepoUrl:
        "https://github.com/MuhammadJamal99/restaurant",
    };
  },
  components: {
    FontAwesomeIcon,
    DarkModeToggle,
  },
  computed: {
    ...mapState(["location", "phoneNumber", "email"]),
    ...mapGetters(["darkMode"]),
  },
  methods: {
    alertNoSocialImplemented: function () {
      alert(
        "This is not a real restaurant, obviously it does not have social media"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

#footer {
  background-color: #fff;
  box-shadow: 0px 6px 20px 3px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  text-align: center;

  &.dark-mode {
    background-color: $darkMode-bg;
    box-shadow: 0px 6px 20px 3px $darkMode-firstColor;
    color: $darkMode-firstColor;

    .social-media {
      display: flex;

      & > .icon {
        color: #000;

        &.facebook {
          background-color: #3b5998;
        }
        &.tripadvisor {
          background-color: #00af87;
        }
        &.github {
          background-color: #797979;
        }

        &:hover {
          color: #fff;
        }
      }
    }
  }
}

.dark-mode-toggle-container {
  width: 100%;
}

img {
  width: 15rem;
}

p {
  &.location {
    margin-bottom: 0.25rem;
  }
  &.contact {
    margin-top: 0.25rem;
    margin-bottom: 1.2rem;
  }
}

.social-media {
  display: flex;

  & > .icon {
    font-size: 1.2rem;
    color: #fff;
    width: 2rem;
    height: 2rem;
    margin: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.5s, color 1s;

    &.facebook {
      background-color: #3b5998;
    }
    &.tripadvisor {
      background-color: #00af87;
    }
    &.github {
      background-color: #333;
    }

    &:hover {
      transform: scale(1.2);
      color: #000;
    }
  }
}
</style>
