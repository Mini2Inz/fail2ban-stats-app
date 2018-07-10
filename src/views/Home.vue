<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex xs12 md6>
        <v-card height="100%">
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
      <v-flex xs12 md6>
        <v-card height="100%">
          <v-card-title class="headline">
            Liczba blokad według więzień
          </v-card-title>
          <v-card-text>
            <pie-chart v-if="jailsData" :data="jailsData" />
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
      countriesData: 'countries/data',
      jailsData:     'jails/data'
    })
  },
  created() {
    this.$store.dispatch('countries/fetchData');
    this.$store.dispatch('jails/fetchData');
  }
};
</script>
