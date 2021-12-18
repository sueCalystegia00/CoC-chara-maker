<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{ jobslist }}
  </div>
</template>

<script>
// @ is an alias to /src
import jobsList from "@/assets/jobsList.json";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      jobslist: jobsList,
    };
  },
};
</script>
