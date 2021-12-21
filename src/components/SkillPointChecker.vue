<template>
  <div class="skill-point-checker">
    <div class="job-point">
      <div class="label">職業ポイント</div>
      <div class="point">◯◯/◯◯</div>
    </div>
    <div class="int-point">
      <div class="label">興味ポイント</div>
      <div class="point">◯◯/◯◯</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillPointChecker",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill-point-checker {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
div[class$="point"] {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.label {
  width: 50%;
  height: 100%;
  background-color: #000000;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.point {
  width: 50%;
  height: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px;
  box-sizing: border-box;
}
</style>
