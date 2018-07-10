<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'BarChart',
  props: {
    labels: { type: Array, required: true },
    values: { type: Array, required: true }
  },
  mounted() {
    const ctx = this.$refs.canvas.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          data: this.values,
          backgroundColor: '#377eb8'
        }]
      },
      options: {
        legend: { display: false }
      }
    });
  }
};
</script>
