import Vue from "vue";
import Vuex from "vuex";

import statusListData from "@/assets/json/statusList.json";
import abilityListData from "@/assets/json/ abilityList.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobName: "",
    statusList: statusListData,
    abilityList: abilityListData,
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
    setSkill: (state, { type, key, values }) => {
      state.abilityList[type][key] = values;
    },
  },
  actions: {},
  modules: {},
});
