<template>
  <v-container fluid grid-list-md class="pa-2">
    <v-layout wrap>
      <v-flex xs12 md6>
        <v-card height="100%">
          <v-card-title class="headline">
            Liczba blokad według krajów
          </v-card-title>
          <v-card-text>
            <pie-chart v-if="countriesData" :data="countriesData" />
            <div v-else class="text-xs-center">
              <v-progress-circular indeterminate color="primary" />
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
              <v-progress-circular indeterminate color="primary" />
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card>
          <v-card-title class="headline">
            Serwery
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="serversData || []"
            :loading="!serversData"
            hide-actions
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.host }}</td>
              <td>{{ props.item.port }}</td>
              <td>{{ props.item.bans }}</td>
            </template>
          </v-data-table>
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
  data: () => ({
    headers: [
      { value: 'host', text: 'Host' },
      { value: 'port', text: 'Port' },
      { value: 'bans', text: 'Blokady' }
    ]
  }),
  computed: {
    ...mapGetters({
      countriesData: 'countries/data',
      jailsData:     'jails/data',
      serversData:   'servers/data'
    })
  },
  created() {
    this.$store.dispatch('countries/fetchData');
    this.$store.dispatch('jails/fetchData');
    this.$store.dispatch('servers/fetchData');
  }
};
</script>
