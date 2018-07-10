<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-title class="headline">
            Liczba blokad według krajów
          </v-card-title>
          <v-card-text>
            <pie-chart v-if="countriesData" :data="countriesData" />
            <div v-else class="text-xs-center">
              <v-progress-circular indeterminate />
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import PieChart from '../components/PieChart';

export default {
  name: 'Home',
  components: {
    PieChart
  },
  computed: {
    ...mapGetters({
      countriesData: 'countries/data'
    })
  },
  created() {
    this.$store.dispatch('countries/fetchData');
  }
};
</script>
