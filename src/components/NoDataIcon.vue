<template>
  <div class="no-data-icon text-xs-center">
    <v-icon v-if="icon" :size="size" class="grey--text text--lighten-2">
      {{ icon }}
    </v-icon>
    <div class="grey--text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoDataIcon',
  props: {
    icon: { type: String, default: 'bar_chart' },
    size: { type: Number, default: 100 },
    text: { type: String, default: 'Brak danych' }
  }
};
</script>
