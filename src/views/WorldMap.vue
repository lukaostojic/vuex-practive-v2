<template>
  <main class="world-map-wrapper">
    <div class="world-map-image" @click="setCoordinates">
      <img src="../assets/world.svg" alt="" />
      <span id="mapCenter"></span>
    </div>
    <region-info :regionInfo="regionInfo"></region-info>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
import RegionInfo from "../components/RegionInfo";

export default {
  components: {
    RegionInfo,
  },

  data() {
    return {
      coordinates: {
        x: 0,
        y: 0,
      },
    };
  },

  methods: {
    ...mapActions(["sendCoordinates"]),
    setCoordinates(event) {
      const mapCenter = document
        .getElementById("mapCenter")
        .getBoundingClientRect();

      this.coordinates = {
        x: -(mapCenter.left - event.clientX) / 4,
        y: (mapCenter.top - event.clientY) / 4,
      };

      this.sendCoordinates(this.coordinates);
    },
  },

  computed: {
    ...mapState(["regionInfo"]),
  },
};
</script>

<style lang="scss" scoped>
.world-map {
  &-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    min-height: calc(100% - 60px);
  }

  &-image {
    position: absolute;

    img {
      width: 100%;
      height: auto;
    }

    span {
      position: absolute;
      left: 50%;
      top: 50%;
    }
  }
}
</style>
