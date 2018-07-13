<template>
  <div class="world-map">
    <div class="world-map__wrapper">
      <div ref="map" class="world-map__map"></div>
    </div>
  </div>
</template>

<script>
import 'ammap3';
import 'ammap3/ammap/ammap.css';
import 'ammap3/ammap/maps/js/worldLow';

/* global AmCharts */

export default {
  name: 'WorldMap',
  mounted() {
    this.map = AmCharts.makeChart(this.$refs.map, {
      type: 'map',
      projection: 'miller',
      dataProvider: {
        map: 'worldLow',
        getAreasFromMap: true
      },
      areas: [

      ],
      areasSettings: {
        color: 'rgba(0,0,0,.12)'
      },
      dragMap: false,
      zoomControl: {
        homeButtonEnabled: false,
        zoomControlEnabled: false
      }
    });
  }
};
</script>

<style lang="scss">
.world-map {
  margin: 0 auto;
  max-width: 1000px;

  &__wrapper {
    width: 100%;
    position: relative;
    padding-bottom: 50%;
    box-sizing: border-box;
  }

  &__map {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
