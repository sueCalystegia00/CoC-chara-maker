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
    getCharactersSheetFromFirestore: async ({ commit }) => {
      const doc = await db.collection("CharacterSheets").doc("test").get();
      if (!doc.data()) return;
      // プロフィール設定
      Object.keys(doc.data().profile).map((keyName) => {
        commit("setProfile", {
          key: keyName,
          value: doc.data().profile[keyName],
        });
      });
      // 職業設定
      commit("setJobName", doc.data().jobName);
      // ステータス設定
      Object.keys(doc.data().statusList).map((typeName) => {
        Object.keys(doc.data().statusList[typeName]).map((keyName) => {
          commit("setStatus", {
            type: typeName,
            key: keyName,
            values: doc.data().statusList[typeName][keyName],
          });
        });
      });
      // 技能設定
      Object.keys(doc.data().abilityList).map((typeName) => {
        Object.keys(doc.data().abilityList[typeName]).map((keyName) => {
          commit("setSkill", {
            type: typeName,
            key: keyName,
            values: doc.data().abilityList[typeName][keyName],
          });
        });
      });
      console.log(doc.data());
    },
  },
  modules: {},
});
