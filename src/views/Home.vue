<template>
  <div class="home">
    <div class="describe">
      <p>クトゥルフキャラシートを作成しよう</p>
      <p>👇</p>
    </div>
    <Status />
    <JobSelector />
    <SkillPoints />
  </div>
</template>

<script>
// @ is an alias to /src
import Status from "@/components/Status.vue";
import JobSelector from "@/components/JobSelector.vue";
import SkillPoints from "@/components/SkillPoints.vue";

export default {
  name: "Home",
  components: {
    Status,
    JobSelector,
    SkillPoints,
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
</style>
