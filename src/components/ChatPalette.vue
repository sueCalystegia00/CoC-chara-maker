<template>
  <div class="chat-palette">
    <div class="title">
      <button
        @click="
          createCharacterProfile();
          createChatPalette();
        "
      >
        チャットパレット生成
      </button>
    </div>
    <textarea v-model="characterProfileText" />
    <textarea v-model="chatPaletteText" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ChatPalette",
  data() {
    return {
      characterProfileText: "",
      chatPaletteText: "CCB<=\nCCB<={SAN} SANチェック",
    };
  },
  computed: {
    ...mapState(["profile", "jobName", "statusList", "abilityList"]),
  },
  methods: {
    createCharacterProfile() {
      const personalityText = `${this.profile.name}(${this.profile.age}) ${this.jobName} ${this.profile.gender} \n`;
      const commonStatusText =
        Object.keys(this.statusList.commonStatusSheet).reduce(
          (commonStatusText, statusKey) => {
            commonStatusText += `${this.statusList.commonStatusSheet[statusKey].displayName}: ${this.statusList.commonStatusSheet[statusKey].value}  `;
            return commonStatusText;
          },
          ""
        ) + "\n";
      const additionalStatusText =
        Object.keys(this.statusList.calclatedStatusSheet).reduce(
          (calclatedStatusText, statusKey) => {
            calclatedStatusText += `${this.statusList.calclatedStatusSheet[statusKey].displayName}: ${this.statusList.calclatedStatusSheet[statusKey].value}  `;
            return calclatedStatusText;
          },
          ""
        ) +
        `${this.statusList.specStatusSheet.damageBonus.displayName}: ${this.statusList.specStatusSheet.damageBonus.value}  \n`;
      const divider = "-------------------------------------\n";
      const skillset = Object.keys(this.abilityList).reduce(
        (skillTexts, categoryKey) => {
          let skillText = Object.keys(this.abilityList[categoryKey]).reduce(
            (skillText, skillKey) => {
              if (!this.abilityList[categoryKey][skillKey].setPalette) {
                return skillText;
              }
              const option = this.abilityList[categoryKey][skillKey].option
                ? `(${this.abilityList[categoryKey][skillKey].option})`
                : "";
              skillText += `${skillKey}${option}(${this.abilityList[categoryKey][skillKey].value})`;
              return `${skillText}  `;
            },
            ""
          );
          skillTexts += `${skillText} \n`;
          return skillTexts;
        },
        ""
      );
      this.characterProfileText =
        personalityText +
        commonStatusText +
        additionalStatusText +
        divider +
        "【技能】\n" +
        skillset +
        divider +
        "【持ち物】\n" +
        this.profile.belongings;
      this.$store.dispatch("getCharactersSheetFromFirestore");
    },
    createChatPalette() {
      const initText = "CCB<=\nCCB<={SAN} SANチェック\n";
      const palette = Object.keys(this.abilityList).reduce(
        (palette, categoryName) => {
          let commands = Object.keys(this.abilityList[categoryName]).reduce(
            (commands, skillName) => {
              if (!this.abilityList[categoryName][skillName].setPalette) {
                return commands;
              }
              const option = this.abilityList[categoryName][skillName].option
                ? `(${this.abilityList[categoryName][skillName].option})`
                : "";
              commands += `CCB<=${this.abilityList[categoryName][skillName].value} ${skillName}${option}\n`;
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
  position: relative;
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
