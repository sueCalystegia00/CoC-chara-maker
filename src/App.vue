<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "normalize.css";
export default {
  name: "App",
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
  color: #2c3e50;
}
</style>
