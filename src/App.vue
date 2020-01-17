<template>
  <div id="app">
    <LanguageGenerator />
  </div>
</template>

<script>

import LanguageGenerator from "./components/LanguageGenerator.vue";

export default {
  name: "app",
  components: { LanguageGenerator }
}

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
