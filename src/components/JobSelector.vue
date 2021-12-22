<template>
  <div class="jobselector">
    <div class="job">
      <div class="label">職業</div>
      <v-select
        class="job-select"
        @input="setSelectedJobName"
        :options="Object.keys(jobsList)"
        :value="jobName"
      ></v-select>
    </div>
    <div class="job-skill-sheet" v-show="jobSkills">{{ jobSkills }}</div>
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
  data() {
    return {
      jobsList: jobsListData,
    };
  },
  computed: {
    ...mapState(["jobName"]),
    jobSkills() {
      if (this.jobName == "") return null;
      return this.jobsList[this.jobName];
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
}
.job-select >>> .vs__dropdown-toggle {
  height: 100%;
}
.job-skill-sheet {
  width: 100%;
  background: #d3d3d3;
  line-height: 2rem;
}
</style>
