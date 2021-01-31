<template>
  <div class="region-info-wrapper">
    <header @click="showDetails" class="region-info__header">
      <span>{{ regionInfo.name }}</span>
      <span>{{ regionInfo.main.temp | tempConverter }}</span>
    </header>
    <div v-if="detailsVisible" class="region-info__details">
      <div class="region-info__details-item">
        <span>Feels like</span
        ><span>{{ regionInfo.main.feels_like | tempConverter }}</span>
      </div>
      <div class="region-info__details-item">
        <span>Pressure</span>
        <span>{{ regionInfo.main.pressure }}</span>
      </div>
      <div class="region-info__details-item">
        <span>Hunidity</span>
        <span>{{ regionInfo.main.humidity }}</span>
      </div>
      <div class="region-info__details-item">
        <span>Max temp</span>
        <span>{{ regionInfo.main.temp_max | tempConverter }}</span>
      </div>
      <div class="region-info__details-item">
        <span>Min temp</span>
        <span>{{ regionInfo.main.temp_min | tempConverter }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    regionInfo: Object,
    isWorldMap: Boolean,
  },

  data() {
    return {
      detailsVisible: false,
    };
  },

  methods: {
    showDetails() {
      if (!this.isWorldMap) {
        this.detailsVisible = !this.detailsVisible;
      }
    },
  },

  filters: {
    tempConverter(val) {
      return Math.round(val - 273.15) + "°C";
    },
  },

  mounted() {
    this.detailsVisible = this.isWorldMap;
  },
};
</script>

<style lang="scss" scoped>
.region-info {
  &-wrapper {
    padding-top: 15px;
    font-size: 14px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 6px 10px;
    background: #8ba590;
    color: #fff;
    border-radius: 2px;
  }

  &__details {
    background: #f5f5f5;

    &-item {
      display: flex;
      justify-content: space-between;
      padding: 6px 10px;
    }
  }
}
</style>
