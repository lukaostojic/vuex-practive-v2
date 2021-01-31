<template>
  <div
    v-if="(isVisible = regionInfo.name === '')"
    class="error-message-wrapper"
  >
    <p>No results found</p>
  </div>
</template>

<script>
export default {
  props: {
    regionInfo: Object,
  },

  data() {
    return {
      isVisible: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.error-message {
  &-wrapper {
    position: absolute;
    top: calc(100% - 60px);
    height: 60px;
    width: 100%;
    background: #da8e8e;
    color: #fff;
    line-height: 60px;
    text-align: center;
  }
}
</style>
