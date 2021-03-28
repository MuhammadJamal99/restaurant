<template>
  <div id="home" class="page" v-darkmode>
    <Hero>
      <div class="hero-content centering-container">
        <img src="../assets/images/logo.png" />
        <h2 class="heading">True Italian Taste</h2>
        <div class="decorated-orizontal-line">
          <div class="line"></div>
          <span class="icon"><FontAwesomeIcon icon="pizza-slice" /></span>
          <div class="line"></div>
        </div>
        <h2 class="opening-times">Opening Times</h2>
        <h2 class="info">Lunch: {{ lunchOpeningHours }}</h2>
        <h2 class="info">Dinner: {{ dinnerOpeningHours }}</h2>
        <h2 class="info">{{ closedOnText }}</h2>
      </div>
    </Hero>
    <section>
      <div
        v-for="(info, index) of genericInfos"
        :key="`${index}-${info.title}`"
        :class="`generic-card-container${
          index % 2 === 1 ? ' pizza-background' : ''
        }`"
      >
        <GenericInfoCard
          :imageSrc="info.imageSrc"
          :title="info.title"
          :description="info.description"
          :image-on-the-right="index % 2 === 1"
        >
          <router-link
            v-if="info.linkButton"
            :class="info.linkButton.class"
            :to="info.linkButton.to"
            >{{ info.linkButton.text }}</router-link
          >
        </GenericInfoCard>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Hero from "../components/Hero";
import GenericInfoCard from "../components/GenericInfoCard";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default {
  data: function () {
    return {
      genericInfos: [
        {
          imageSrc: require("../assets/images/info-generic-pizza.jpg"),
          title: "Real Italian Pizza",
          description:
            "Our pizzas are made with only the best ingredients and cooked as per the traditional italian repices. We pride ourself in our food quality and guarantee you that you won't be dissapointed to eat our pizzas.",
        },
        {
          imageSrc: require("../assets/images/info-delivery.jpg"),
          title: "Delivery",
          description:
            "We provide a delivery service which brings our delicious pizzas right in front of your door, still warm and ready to eat. All you need to do is call us and place your order, our staff will see that your pizzas are delivered right on time.",
          linkButton: {
            text: "Read More",
            class: "btn delivery",
            to: "/delivery",
          },
        },
        {
          imageSrc: require("../assets/images/info-oven.jpg"),
          title: "Only Wood-Fired Ovens",
          description:
            "Our pizzas are only cooked in real classic wood-fired ovens, these guarantee a more omogeneous heat distribution which produces richer smoky flavors and a very nice crispy crust not obtainable using moder ovens.",
        },
      ],
    };
  },
  computed: {
    ...mapState([
      "lunchOpeningHours",
      "dinnerOpeningHours",
      "daysOfWeekWhenClosed",
    ]),
    ...mapGetters(["darkMode"]),
    closedOnText: function () {
      if (!this.daysOfWeekWhenClosed || this.daysOfWeekWhenClosed.length === 0)
        return "Open every day";

      const daysOfWeekWhenClosedTmp = this.daysOfWeekWhenClosed.map(
        (day) => `${capitalizeFirstLetter(day)}s`
      );

      let daysText = daysOfWeekWhenClosedTmp[0];
      let idx = 0;
      while (idx < daysOfWeekWhenClosedTmp.length - 1) {
        idx++;
        const commaOrAnd =
          idx < daysOfWeekWhenClosedTmp.length - 1 ? ", " : " and ";
        daysText = `${daysText}${commaOrAnd}${daysOfWeekWhenClosedTmp[idx]}`;
      }
      return `Closed on ${daysText}`;
    },
  },
  components: {
    Hero,
    FontAwesomeIcon,
    GenericInfoCard,
  },
};
</script>

<style lang="scss" scoped>
.page#home {
  padding-top: 0;
}

.hero-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  h2 {
    margin: 0.5rem;

    &.heading {
      font-family: "Italianno", cursive;
      font-size: 2.3rem;
      font-weight: 100;
    }

    &.opening-times {
      margin-top: 1rem;
      font-size: 1.8rem;
    }

    &.info {
      font-size: 1.4rem;
      font-weight: 100;
      margin: 0 1rem;
    }
  }

  img {
    width: 60%;
  }

  .decorated-orizontal-line {
    display: flex;
    width: 40%;
    align-items: center;

    .icon {
      padding: 0 1rem;
      font-size: 1.5rem;
      transform: rotate(-45deg);
    }

    .line {
      margin: 10px 0;
      height: 2px;
      width: 40%;
      background-color: #fff;
    }
  }
}

.generic-card-container {
  padding: 5rem;
}

.pizza-background {
  background: url("../assets/images/pizza-background.jpg") no-repeat bottom
    center/cover fixed;
}

.btn.delivery {
  margin-top: 1rem;
}
</style>
