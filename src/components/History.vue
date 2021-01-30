<template>
  <aside class="aside-wrapper">
    <h4>History</h4>
    <ul class="history-list">
      <region-info
        tag="li"
        v-for="(regionInfo, index) in history"
        :key="index"
        :regionInfo="regionInfo"
      ></region-info>
    </ul>
  </aside>
</template>

<script>
import { mapState } from "vuex";
import RegionInfo from "./RegionInfo";

export default {
  components: {
    RegionInfo,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState(["history"]),
  },
};
</script>

<style lang="scss" scoped>
.aside-wrapper {
  min-width: 300px;
  height: calc(100vh - 60px);
  padding: 15px;
  border-left: 2px solid #f2f5fd;

  h4 {
    padding-bottom: 15px;
    border-bottom: 2px solid #f2f5fd;
    text-align: center;
  }
}

.history-list {
  list-style: none;
}
</style>
