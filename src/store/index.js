import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/compat/app";
import { db } from "../main";
import statusListData from "@/assets/json/statusList.json";
import abilityListData from "@/assets/json/abilityList.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characterId: null,
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
    setCharacterId: (state, payload) => (state.characterId = payload),
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
    setSkillPalette: (state, { type, key, setPalette }) => {
      state.abilityList[type][key].setPalette = setPalette;
    },
  },
  actions: {
    getCharactersSheetFromFirestore: async ({ commit }, id) => {
      const doc = await db.collection("CharacterSheets").doc(id).get();
      if (!doc.data()) return;
      // ID設定
      commit("setCharacterId", id);
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
    },
    setCharactersSheetToFirestore: async ({ state, commit }) => {
      const res = await db.collection("CharacterSheets").add({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        profile: state.profile,
        jobName: state.jobName,
        statusList: state.statusList,
        abilityList: state.abilityList,
      });
      commit("setCharacterId", res.id);
    },
    updateCharactersSheetInFirestore: async ({ state }) => {
      await db
        .collection("CharacterSheets")
        .doc(state.characterId)
        .update({
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          profile: state.profile,
          jobName: state.jobName,
          statusList: state.statusList,
          abilityList: state.abilityList,
        })
        .then(() => {
          alert("更新しました！");
        });
    },
  },
  modules: {},
});
