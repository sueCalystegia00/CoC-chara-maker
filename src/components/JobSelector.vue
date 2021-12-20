<template>
  <div class="jobselector">
    <table class="job">
      <tbody>
        <tr>
          <th class="label">職業</th>
          <td>
            <select v-model="selectedJobName">
              <option
                v-for="(jobName, index) in Object.keys(jobsList)"
                :key="index"
              >
                {{ jobName }}
              </option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
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
.job,
.job tbody {
  width: 100%;
  text-align: center;
}
.job tr {
  height: 30px;
}
tbody th {
  width: 31%;
  background-color: #000000;
  color: #ffffff;
}
tbody td {
  border: 1px solid #cdcdcd;
}

select {
  width: 100%;
}
</style>
