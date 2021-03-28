import Vue from "vue";
import Vuex from "vuex";

import VuexPersistence from "vuex-persist";

import menuData from "./menuData";

Vue.use(Vuex);

const darkModeModule = {
  state: {
    darkMode: true,
  },
  mutations: {
    set_darkMode: function(state, value) {
      state.darkMode = value;
    },
  },
};

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ["darkModeModule"],
});

export default new Vuex.Store({
  state: {
    location: "Pizzas Rd, Somewhere , 12 - P1ZZ4 United Kingdom",
    phoneNumber: "+12 3456 7891011",
    email: "dariospizzas@fakeemail.com",
    menuSections: menuData.menuSections,
    lunchOpeningHours: "11:00 - 16:00",
    dinnerOpeningHours: "19:00 - 23:30",
    daysOfWeekWhenClosed: ["tuesday"],
  },
  mutations: {
    darkMode(state) {
      console.log({ mutation_state: state });
    },
  },
  actions: {},
  getters: {
    darkMode(state) {
      return state.darkModeModule.darkMode;
    },
  },
  modules: { darkModeModule },
  plugins: [vuexLocal.plugin],
});
