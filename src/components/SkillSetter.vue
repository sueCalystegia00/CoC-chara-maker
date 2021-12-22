<template>
  <div class="skill-setter">
    <div
      class="skill-tables"
      v-for="(category, index) in Object.keys(abilityList)"
      :key="index"
    >
      <div class="title">
        <h2>{{ category }}</h2>
      </div>
      <table class="skill-table">
        <thead>
          <tr>
            <th></th>
            <th>初期値</th>
            <th>職業P</th>
            <th>興味P</th>
            <th>補正</th>
            <th>能力値</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(skill, skillName) in abilityList[category]"
            :key="skillName"
            class="skill-row"
          >
            <th class="displayname">
              {{ skillName }}
              <input
                type="text"
                v-if="'option' in skill"
                class="skill-option-name"
                v-model="skill.option"
                @input="inputSkill(category, skillName, skill)"
              />
            </th>
            <td class="default unedit">{{ skill.default }}</td>
            <td class="job-point">
              <input
                type="number"
                v-model="skill.jobPoint"
                @input="inputSkill(category, skillName, skill)"
              />
            </td>
            <td class="int-point">
              <input
                type="number"
                v-model="skill.intPoint"
                @input="inputSkill(category, skillName, skill)"
              />
            </td>
            <td class="adjust">
              <input
                type="number"
                v-model="skill.adjustPoint"
                @input="inputSkill(category, skillName, skill)"
              />
            </td>
            <td class="value unedit" :class="{ over: skill.value >= 100 }">
              {{ skill.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SkillSetter",
  computed: {
    ...mapState(["statusList", "abilityList"]),
  },
  watch: {
    "statusList.commonStatusSheet.dexterity.value": function (value) {
      this.abilityList["戦闘技能"]["回避"].default = value * 2;
    },
    "statusList.commonStatusSheet.education.value": function (value) {
      this.abilityList["交渉技能"]["母国語"].default = value * 5;
    },
  },
  methods: {
    inputSkill(typeName, keyName, skillValues) {
      let setValues = { ...skillValues };
      setValues.value =
        Number(skillValues.default) +
        Number(skillValues.jobPoint) +
        Number(skillValues.intPoint) +
        Number(skillValues.adjustPoint);
      this.$store.commit("setSkill", {
        type: typeName,
        key: keyName,
        values: setValues,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill-setter {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 20px;
}
@media screen and (max-width: 650px) {
  .skill-setter {
    grid-template-columns: repeat(1, 1fr);
  }
}
.skill-tables {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.skill-table {
  width: 100%;
}
table,
thead,
tbody {
  width: 100%;
  text-align: center;
}
thead th {
  font-size: 0.5rem;
  color: #373737;
}
tbody tr {
  height: 40px;
}
tbody th {
  width: 30%;
  height: 100%;
  background-color: #000000;
  color: #ffffff;
  font-size: clamp(0.5rem, 1.8vw, 1rem);
  font-weight: bold;
}
tbody td {
  position: relative;
  width: 14%;
  height: 100%;
  border: 1px solid #cdcdcd;
}
td input[type="number"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  border: none;
  padding: 0;
  box-sizing: border-box;
}
.unedit {
  background-color: #c4c4c4;
}
.over {
  background-color: #ffb7c8;
}
.skill-option-name {
  width: 80%;
  text-align: center;
}
</style>
