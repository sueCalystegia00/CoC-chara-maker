<template>
  <div class="character">
    <Profile />
    <JobSelector />
    <Status />
    <SkillSetter />
    <ChatPalette />
    <div class="setter">
      <div class="update-button-wrapper">
        <p>キャラシートを更新しますか？</p>
        <button @click="updateCharacter">更新</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from "@/components/Profile.vue";
import JobSelector from "@/components/JobSelector.vue";
import Status from "@/components/Status.vue";
import SkillSetter from "@/components/SkillSetter.vue";
import ChatPalette from "@/components/ChatPalette.vue";
export default {
  name: "Character",
  components: { Status, Profile, JobSelector, SkillSetter, ChatPalette },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch(
      "getCharactersSheetFromFirestore",
      this.$route.query.id
    );
  },
  methods: {
    updateCharacter() {
      this.$store.dispatch("updateCharactersSheetInFirestore");
    },
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

.update-button-wrapper button {
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

.update-button-wrapper button::before {
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

.update-button-wrapper button::after {
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

.update-button-wrapper button:hover {
  text-decoration: none;
  background-color: #bbbbbb;
}

.update-button-wrapper button:hover::before,
.update-button-wrapper button:hover::after {
  right: 0.5em;
}
</style>
