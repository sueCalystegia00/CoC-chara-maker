<template>
  <div class="home">
    <div class="describe">
      <p>クトゥルフキャラシートを作成しよう</p>
      <p>👇</p>
    </div>
    <Status />
  </div>
</template>

<script>
// @ is an alias to /src
import Status from "@/components/Status.vue";

export default {
  name: "Home",
  components: {
    Status,
  },
  data() {
    return {};
  },
};
</script>

<style>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.describe {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
}
</style>
