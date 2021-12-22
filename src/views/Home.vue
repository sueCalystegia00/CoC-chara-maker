<template>
  <div class="home">
    <div class="describe">
      <p>クトゥルフキャラシートを作成しよう</p>
      <p>👇</p>
    </div>
    <Status />
    <div class="sticky">
      <JobSelector />
      <SkillPointsChecker />
    </div>
    <SkillSetter />
  </div>
</template>

<script>
// @ is an alias to /src
import Status from "@/components/Status.vue";
import JobSelector from "@/components/JobSelector.vue";
import SkillPointsChecker from "@/components/SkillPointsChecker.vue";
import SkillSetter from "@/components/SkillSetter.vue";

export default {
  name: "Home",
  components: {
    Status,
    JobSelector,
    SkillPointsChecker,
    SkillSetter,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 20px;
  box-sizing: border-box;
}

.describe {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  box-sizing: border-box;
  background-color: #ffffff;
  z-index: 999;
}
</style>
