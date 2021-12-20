<template>
  <div class="jobselector">
    <div class="job">
      <div class="label">職業</div>
      <select v-model="selectedJobName">
        <option v-for="(jobName, index) in Object.keys(jobsList)" :key="index">
          {{ jobName }}
        </option>
      </select>
    </div>
    <div class="job-skill-sheet" v-show="jobSkills">{{ jobSkills }}</div>
  </div>
</template>

<script>
import jobsListData from "@/assets/jobsList.json";
export default {
  name: "JobSelector",
  data() {
    return {
      jobsList: jobsListData,
      selectedJobName: "",
    };
  },
  computed: {
    jobSkills() {
      if (this.selectedJobName == "") return null;
      return "---";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jobselector {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.job {
  width: 100%;
  height: 30px;
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
.job select {
  width: 80%;
  height: 100%;
}
.job-skill-sheet {
  width: 100%;
  background: #d3d3d3;
}
</style>
