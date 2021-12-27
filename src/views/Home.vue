<template>
  <div class="home">
    <div class="describe">
      <p>クトゥルフキャラシートを作成しよう</p>
      <p>👇</p>
    </div>
    <Status editable />
    <div class="sticky">
      <JobSelector editable />
      <SkillPointsChecker />
    </div>
    <SkillSetter />
    <Profile editable />
    <ChatPalette />
    <div class="setter">
      <p>このキャラシートを保存することができます</p>
      <div class="save-button-wrapper">
        <button @click="saveCharacter">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import Status from "@/components/Status.vue";
import JobSelector from "@/components/JobSelector.vue";
import SkillPointsChecker from "@/components/SkillPointsChecker.vue";
import SkillSetter from "@/components/SkillSetter.vue";
import Profile from "@/components/Profile.vue";
import ChatPalette from "@/components/ChatPalette.vue";

export default {
  name: "Home",
  components: {
    Status,
    JobSelector,
    SkillPointsChecker,
    SkillSetter,
    Profile,
    ChatPalette,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["characterId"]),
  },
  methods: {
    async saveCharacter() {
      await this.$store.dispatch("setCharactersSheetToFirestore");
      this.$router.push({
        path: "/character",
        query: { id: this.characterId },
      });
    },
  },
};
</script>

<style scoped>
.home {
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

.save-button-wrapper button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 1em 2em;
  width: 300px;
  color: #333;
  font-size: 18px;
  font-weight: 700;
  background-color: #cccccc;
  transition: 0.3s;
}

.save-button-wrapper button::before {
  content: "";
  position: absolute;
  top: calc(50% - 2px);
  right: 1em;
  transform: translateY(calc(-50% - 2px)) rotate(30deg);
  width: 12px;
  height: 2px;
  background-color: #2285b1;
  transition: 0.3s;
}

.save-button-wrapper button::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 1em;
  transform: translateY(-50%);
  width: 70px;
  height: 2px;
  background-color: #2285b1;
  transition: 0.3s;
}

.save-button-wrapper button:hover {
  text-decoration: none;
  background-color: #bbbbbb;
}

.save-button-wrapper button:hover::before,
.save-button-wrapper button:hover::after {
  right: 0.5em;
}
</style>
