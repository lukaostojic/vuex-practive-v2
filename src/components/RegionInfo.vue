<template>
  <div>
    <p>{{ regionInfo.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["regionInfo"],

  data() {
    return {};
  },

  created() {
    // console.log(this.regionInfo);
  },
};
</script>

<style lang="scss" scoped></style>
