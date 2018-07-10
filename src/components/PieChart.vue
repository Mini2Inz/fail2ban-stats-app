<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import Chart   from 'chart.js';
import palette from 'google-palette';

export default {
  name: 'PieChart',
  props: {
    data: { type: Object, required: true }
  },
  computed: {
    labels() {
      return Object.keys(this.data);
    },
    values() {
      return Object.values(this.data);
    }
  },
  mounted() {
    const ctx = this.$refs.canvas.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [{
          data: this.values,
          backgroundColor: palette('mpn65', this.values.length).map(v => '#' + v)
        }]
      }
    });
  }
};
</script>
