<template>
  <div class="jobselector">
    <div class="job">
      <div class="label">職業</div>
      <v-select
        v-if="editable"
        class="job-select"
        @input="setSelectedJobName"
        :options="Object.keys(jobsList)"
        :value="jobName"
      ></v-select>
      <div v-else class="job-select preview">
        {{ jobName }}
      </div>
    </div>
    <div
      v-if="editable"
      class="job-skill-sheet"
      v-show="jobSkills.jobSkillsText"
    >
      <p>{{ jobSkills.jobSkillsText }}</p>
      <p>{{ jobSkills.selectSkillsText }}</p>
      <p>{{ jobSkills.anySelectText }}</p>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { mapState } from "vuex";
import jobsListData from "@/assets/json/jobsList.json";
export default {
  name: "JobSelector",
  components: {
    vSelect,
  },
  props: {
    editable: Boolean,
  },
  data() {
    return {
      jobsList: jobsListData,
    };
  },
  computed: {
    ...mapState(["jobName", "abilityList"]),
    jobSkills() {
      if (!this.jobName)
        return {
          jobSkillsText: "",
          selectSkillsText: "",
        };
      const jobSkillsText =
        "【職業技能】" +
        this.jobsList[this.jobName]["職業技能"]
          .reduce((text, skill) => {
            text += `${skill}, `;
            return text;
          }, "")
          .slice(0, -2);
      const selectSkillsText = this.jobsList[this.jobName].select
        ? `【次から${this.jobsList[this.jobName].select.count}つ選択】` +
          this.jobsList[this.jobName].select.choice
            .reduce((text, skill) => {
              text += `${skill}, `;
              return text;
            }, "")
            .slice(0, -2)
        : "";
      const anySelectText = this.jobsList[this.jobName].anySelect
        ? `＋個人あるいはその時代の特色的な技能としてさらに${
            this.jobsList[this.jobName].anySelect
          }つの技能`
        : "";
      //return this.jobsList[this.jobName];
      return {
        jobSkillsText: jobSkillsText,
        selectSkillsText: selectSkillsText,
        anySelectText: anySelectText,
      };
    },
  },
  watch: {
    jobName() {
      if (!this.jobName) return;
      Object.keys(this.abilityList).map((categoryName) => {
        Object.keys(this.abilityList[categoryName]).map((skillName) => {
          let palette =
            this.jobsList[this.jobName]["職業技能"].includes(skillName);
          this.$store.commit("setSkillPalette", {
            type: categoryName,
            key: skillName,
            setPalette: palette,
          });
        });
      });
    },
  },
  methods: {
    setSelectedJobName(selectedJobName) {
      this.$store.commit("setJobName", selectedJobName);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jobselector {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.job {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
}
.job .label {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: #ffffff;
  font-weight: bold;
}
.job-select {
  width: 80%;
  height: 100%;
  box-sizing: border-box;
}
.job-select >>> .vs__dropdown-toggle {
  height: 100%;
}
.preview {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  font-weight: bold;
  border: 1px solid #cdcdcd;
}
.job-skill-sheet {
  width: 100%;
  background: #d3d3d3;
  line-height: 2rem;
}
.job-skill-sheet p {
  line-height: 1rem;
  font-size: 0.8rem;
}
</style>
