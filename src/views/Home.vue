<template>
  <div class="home">
    <div class="describe">
      <p>クトゥルフキャラシートを作成しよう</p>
      <p>👇</p>
    </div>
    <Status />
    <JobSelecotr />
  </div>
</template>

<script>
// @ is an alias to /src
import Status from "@/components/Status.vue";
import JobSelecotr from "@/components/JobSelector.vue";

export default {
  name: "Home",
  components: {
    Status,
    JobSelecotr,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.home {
  width: 100%;
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
