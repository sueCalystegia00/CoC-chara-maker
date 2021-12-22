<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import "normalize.css";
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  min-width: 270px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-appearance: none;
  -webkit-text-size-adjust: 100%;
  color: #2c3e50;
}

h1,
h2,
h3,
h4,
p {
  margin: 5px;
}
</style>
