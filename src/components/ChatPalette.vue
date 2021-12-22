<template>
  <div class="chat-palette">
    <div class="title">
      <h2>チャットパレット</h2>
    </div>
    <textarea v-model="chatPaletteText" />
  </div>
</template>

<script>
export default {
  name: "ChatPalette",
  computed: {
    chatPaletteText() {
      return "chatpalette";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat-palette {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
textarea {
  width: 100%;
  height: 100px;
  overflow-y: scroll;
  resize: none;
}
</style>
