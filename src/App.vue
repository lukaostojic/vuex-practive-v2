<template>
  <div id="app">
    <navigation></navigation>
    <div class="main-wrapper">
      <router-view></router-view>
      <history></history>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import History from "./components/History";

export default {
  components: {
    Navigation,
    History,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
}

.main-wrapper {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
</style>
