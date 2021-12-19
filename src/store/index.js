import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: {
      strength: {
        displayName: "STR",
        default: null,
        revised: null,
        define: null,
      },
      constitution: {
        displayName: "CON",
        default: null,
        revised: null,
        define: null,
      },
      power: {
        displayName: "POW",
        default: null,
        revised: null,
        define: null,
      },
      dexterity: {
        displayName: "DEX",
        default: null,
        revised: null,
        define: null,
      },
      appearance: {
        displayName: "APP",
        default: null,
        revised: null,
        define: null,
      },
      size: {
        displayName: "SIZ",
        default: null,
        revised: null,
        define: null,
      },
      interest: {
        displayName: "INT",
        default: null,
        revised: null,
        define: null,
      },
      education: {
        displayName: "EDU",
        default: null,
        revised: null,
        define: null,
      },
      hit_point: {
        displayName: "HP",
        default: null,
        revised: null,
        define: null,
      },
      magic_point: {
        displayName: "MP",
        default: null,
        revised: null,
        define: null,
      },
      sanity: {
        displayName: "SAN",
        default: null,
        revised: null,
        define: null,
      },
      idea: {
        displayName: "アイデア",
        default: null,
        revised: null,
        define: null,
      },
      luck: {
        displayName: "幸運",
        default: null,
        revised: null,
        define: null,
      },
      knowledge: {
        displayName: "知識",
        default: null,
        revised: null,
        define: null,
      },
      damage_bonus: {
        displayName: "DB",
        default: null,
        revised: null,
        define: null,
      },
      max_sanity: {
        displayName: "SAN値上限",
        default: null,
        revised: null,
        define: null,
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
