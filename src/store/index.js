import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobName: "",
    statusList: {
      commonStatusSheet: {
        strength: {
          displayName: "STR",
          default: 0,
          revised: 0,
          value: 0,
        },
        constitution: {
          displayName: "CON",
          default: 0,
          revised: 0,
          value: 0,
        },
        power: {
          displayName: "POW",
          default: 0,
          revised: 0,
          value: 0,
        },
        dexterity: {
          displayName: "DEX",
          default: 0,
          revised: 0,
          value: 0,
        },
        appearance: {
          displayName: "APP",
          default: 0,
          revised: 0,
          value: 0,
        },
        size: {
          displayName: "SIZ",
          default: 0,
          revised: 0,
          value: 0,
        },
        intelligence: {
          displayName: "INT",
          default: 0,
          revised: 0,
          value: 0,
        },
        education: {
          displayName: "EDU",
          default: 0,
          revised: 0,
          value: 0,
        },
      },
      calclatedStatusSheet: {
        hitPoint: {
          displayName: "HP",
          default: 0,
          revised: 0,
          value: 0,
        },
        magicPoint: {
          displayName: "MP",
          default: 0,
          revised: 0,
          value: 0,
        },
        sanity: {
          displayName: "SAN",
          default: 0,
          revised: 0,
          value: 0,
        },
        idea: {
          displayName: "アイデア",
          default: 0,
          revised: 0,
          value: 0,
        },
        luck: {
          displayName: "幸運",
          default: 0,
          revised: 0,
          value: 0,
        },
        knowledge: {
          displayName: "知識",
          default: 0,
          revised: 0,
          value: 0,
        },
      },
      specStatusSheet: {
        damageBonus: {
          displayName: "DB",
          value: "---",
        },
        maxSanityPoint: {
          displayName: "SAN値上限",
          value: 99,
        },
      },
    },
    isOverPoint: {
      job: false,
      interest: false,
    },
  },
  getters: {
    getStatus: (state) => (sheet) => state.statusList[sheet],
  },
  mutations: {
    setJobName: (state, payload) => (state.jobName = payload),
    setStatus: (state, { type, key, values }) => {
      state.statusList[type][key] = values;
    },
    setIsOverPoint: (state, { type, bool }) => {
      state.isOverPoint[type] = bool;
    },
  },
  actions: {},
  modules: {},
});
