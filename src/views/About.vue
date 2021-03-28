<template>
  <div id="about" class="page" v-darkmode>
    <div class="centering-container title-container">
      <h1 class="page-title">About</h1>
    </div>
    <div class="full-width-wrapper">
      <div class="basic-info-container centering-container">
        <div class="contact-info-container">
          <ContactInfo
            v-for="cInfo of contactInfos"
            :key="`${cInfo.icon}-${cInfo.info}`"
            :icon="cInfo.icon"
            :info="cInfo.info"
          />
        </div>
        <div class="opening-times-container">
          <h2 class="opening-times">Opening Times</h2>
          <div
            v-for="opTime of openingTimesInfo"
            :key="opTime.dayOfWeek"
            class="times-info"
          >
            <div class="day-of-week">{{ opTime.dayOfWeek }}:</div>
            <div v-if="opTime.info" class="times">{{ opTime.info }}</div>
            <div v-else class="closed">Closed</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ContactInfo from "../components/ContactInfo";

export default {
  computed: {
    contactInfos: function () {
      return [
        {
          icon: "home",
          info: this.location,
        },
        { icon: "phone-alt", info: this.phoneNumber },
        { icon: "at", info: this.email },
      ];
    },
    openingTimesInfo: function () {
      const standardOpeningTimes = `${this.lunchOpeningHours}, ${this.dinnerOpeningHours}`;
      return [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ].map((dayOfWeek) => ({
        dayOfWeek,
        info: !this.daysOfWeekWhenClosed.includes(dayOfWeek.toLowerCase())
          ? standardOpeningTimes
          : null,
      }));
    },
    ...mapState([
      "location",
      "phoneNumber",
      "email",
      "lunchOpeningHours",
      "dinnerOpeningHours",
      "daysOfWeekWhenClosed",
    ]),
  },
  components: {
    ContactInfo,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.dark-mode .full-width-wrapper {
  background-color: black;
  color: $darkMode-firstColor;
}

.full-width-wrapper {
  background-color: #fff;
  padding: 2rem;
  margin: 2rem 0;

  .basic-info-container {
    display: flex;
    justify-content: space-around;

    @media (max-width: 800px) {
      flex-direction: column;
    }

    .contact-info-container,
    .opening-times-container {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-basis: 30%;
    }
  }
}

.times-info {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  .day-of-week {
    font-weight: bolder;
  }

  .times,
  .closed {
    width: 11rem;
    margin-left: 1rem;
  }

  .times {
    text-align: end;
  }

  .closed {
    text-align: center;
  }
}
</style>
