<template>
  <main class="world-map-wrapper">
    <div class="world-map-image" @click="setCoordinates">
      <img src="../assets/world.svg" alt="" />
      <span id="mapCenter"></span>
    </div>
    <div class="world-map__region-info">
      <region-info :isWorldMap="true" :regionInfo="regionInfo"></region-info>
    </div>
    <error-message :regionInfo="regionInfo"></error-message>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
import RegionInfo from "../components/RegionInfo";
import ErrorMessage from "../components/ErrorMessage";

export default {
  components: {
    RegionInfo,
    ErrorMessage,
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

  &__region-info {
    position: absolute;
    top: 0;
    left: 15px;
    min-width: 200px;
  }
}
</style>
