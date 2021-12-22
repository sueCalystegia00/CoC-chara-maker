<template>
  <div class="skill-points">
    <div class="job-point">
      <div class="label">職業P</div>
      <div class="point">◯◯/{{ totalJobSkillPoint }}</div>
    </div>
    <div class="int-point">
      <div class="label">興味P</div>
      <div class="point">◯◯/{{ totalInterestSkillPoint }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SkillPointChecker",
  computed: {
    ...mapState(["statusList"]),
    totalJobSkillPoint() {
      return this.statusList.commonStatusSheet.education.value * 20;
    },
    totalInterestSkillPoint() {
      return this.statusList.commonStatusSheet.intelligence.value * 10;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill-points {
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
