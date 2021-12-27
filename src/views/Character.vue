<template>
  <div class="character">キャラシだよ</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Character",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.character {
  position: relative;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex: 1;
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
