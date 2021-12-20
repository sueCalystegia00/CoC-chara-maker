<template>
  <div class="jobselector">
    <h1>職業選択</h1>
  </div>
</template>

<script>
export default {
  name: "JobSelector",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jobselector {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
}
h1 {
  font-size: 1.3rem;
}
</style>
