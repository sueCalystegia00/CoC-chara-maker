<template>
  <div class="skill-points">
    <div class="job-point">
      <div class="label">職業P</div>
      <div class="point-value" :class="{ over: isOverJobSkillPoint }">
        {{ usedJobSkillPoint }}/{{ totalJobSkillPoint }}
      </div>
    </div>
    <div class="int-point">
      <div class="label">興味P</div>
      <div class="point-value" :class="{ over: isOverInterestSkillPoint }">
        {{ usedInterestSkillPoint }}/{{ totalInterestSkillPoint }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SkillPointChecker",
  props: {
    usedJobSkillPoint: {
      type: Number,
      default: 0,
    },
    usedInterestSkillPoint: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapState(["statusList"]),
    totalJobSkillPoint() {
      return this.statusList.commonStatusSheet.education.value * 20;
    },
    totalInterestSkillPoint() {
      return this.statusList.commonStatusSheet.intelligence.value * 10;
    },
    isOverJobSkillPoint() {
      const isOver = this.usedJobSkillPoint > this.totalJobSkillPoint;
      this.$store.commit("setIsOverPoint", { type: "job", bool: isOver });
      return isOver;
    },
    isOverInterestSkillPoint() {
      const isOver = this.usedInterestSkillPoint > this.totalInterestSkillPoint;
      this.$store.commit("setIsOverPoint", { type: "interest", bool: isOver });
      return isOver;
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
.point-value {
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
.over {
  background-color: #ffb7c8;
}
</style>
