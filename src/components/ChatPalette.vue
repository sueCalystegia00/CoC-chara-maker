<template>
  <div class="chat-palette">
    <div class="title">
      <button @click="createChatPalette">チャットパレット生成</button>
    </div>
    <textarea v-model="chatPaletteText" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ChatPalette",
  data() {
    return {
      chatPaletteText: "CCB<=\nCCB<={SAN} SANチェック",
    };
  },
  computed: {
    ...mapState(["abilityList"]),
  },
  methods: {
    createChatPalette() {
      const initText = "CCB<=\nCCB<={SAN} SANチェック\n";
      const palette = Object.keys(this.abilityList).reduce(
        (palette, categoryName) => {
          let commands = Object.keys(this.abilityList[categoryName]).reduce(
            (commands, skillName) => {
              if (!this.abilityList[categoryName][skillName].setPalette) {
                return commands;
              }
              commands += `CCB<=${this.abilityList[categoryName][skillName].value} ${skillName}\n`;
              return commands;
            },
            ""
          );
          palette += `${commands}`;
          return palette;
        },
        ""
      );
      this.chatPaletteText = initText + palette;
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
  row-gap: 5px;
}
.title {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
}
button {
  color: #000000;
  background-color: #d8d8d8;
  border: 1.5px solid #000000;
  border-radius: 4px;
  padding: 0 15px;
  cursor: pointer;
  height: 40px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px #a4a4a4, 2px 2px #a4a4a4, 3px 3px #a4a4a4;
}
button:active {
  box-shadow: none;
  transition: all 0.2s ease-in-out;
}
textarea {
  width: 100%;
  height: 100px;
  overflow-y: scroll;
  resize: none;
}
</style>
