<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'BarChart',
  props: {
    labels:      { type: Array, required: true },
    values:      { type: Array, required: true },
    beginAtZero: { type: Boolean, default : false }
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
        legend: { display: false },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: this.beginAtZero
            }
          }]
        }
      }
    });
  }
};
</script>
