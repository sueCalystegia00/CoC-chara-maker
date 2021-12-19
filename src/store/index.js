import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    statusList: {
      commonStatusSheet: [
        {
          displayName: "STR",
          default: null,
          revised: null,
        },
        {
          displayName: "CON",
          default: null,
          revised: null,
        },
        {
          displayName: "POW",
          default: null,
          revised: null,
        },
        {
          displayName: "DEX",
          default: null,
          revised: null,
        },
        {
          displayName: "APP",
          default: null,
          revised: null,
        },
        {
          displayName: "SIZ",
          default: null,
          revised: null,
        },
        {
          displayName: "INT",
          default: null,
          revised: null,
        },
        {
          displayName: "EDU",
          default: null,
          revised: null,
        },
      ],
      calclatedStatusSheet: [
        {
          displayName: "HP",
          revised: null,
        },
        {
          displayName: "MP",
          revised: null,
        },
        {
          displayName: "SAN",
          revised: null,
        },
        {
          displayName: "アイデア",
          revised: null,
        },
        {
          displayName: "幸運",
          revised: null,
        },
        {
          displayName: "知識",
          revised: null,
        },
      ],
      specStatusSheet: [
        {
          displayName: "DB",
          define: null,
        },
        {
          displayName: "SAN値上限",
          define: null,
        },
      ],
    },
  },
  mutations: {
    setCommonStatusSheet(state, data) {
      state.commonStatusSheet = data;
    },
    setCalclatedStatusSheet(state, data) {
      state.calclatedStatusSheet = data;
    },
    setSpecStatusSheet(state, data) {
      state.specStatusSheet = data;
    },
  },
  actions: {},
  modules: {},
});
