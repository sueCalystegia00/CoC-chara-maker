import Vue from "vue";
import Vuex from "vuex";
import { db } from "../main";
import statusListData from "@/assets/json/statusList.json";
import abilityListData from "@/assets/json/abilityList.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {
      name: "",
      gender: "",
      age: null,
      belongings: "",
      personalNote: "",
    },
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
    getUsedPoint: (state) => (pointType) => {
      const totalUsedPoint = Object.keys(state.abilityList).reduce(
        (totalUsedPoint, categoryName) => {
          let usedPoint = Object.keys(state.abilityList[categoryName]).reduce(
            (usedPoint, skillName) => {
              usedPoint += Number(
                state.abilityList[categoryName][skillName][pointType]
              );
              return usedPoint;
            },
            0
          );
          totalUsedPoint += Number(usedPoint);
          return totalUsedPoint;
        },
        0
      );
      return totalUsedPoint;
    },
  },
  mutations: {
    setProfile: (state, { key, value }) => (state.profile[key] = value),
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
    setSkillToPalette: (state, { type, key }) => {
      state.abilityList[type][key].setPalette =
        !state.abilityList[type][key].setPalette;
    },
  },
  actions: {
    getCharactersSheetFromFirestore: async (context) => {
      console.log(context.state.jobName);
      const doc = await db.collection("CharacterSheets").doc("test").get();
      console.log(doc.data());
    },
  },
  modules: {},
});
