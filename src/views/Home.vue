<template>
  <v-container fluid grid-list-md class="pa-2">
    <v-layout wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <world-map :data="{ PL: 100, RU: 200, CN: 300, }" />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md6 xl4>
        <v-card height="100%">
          <v-card-title>
            <div>
              <div class="headline">Kraje</div>
              <div>Liczba blokad według krajów</div>
            </div>
          </v-card-title>
          <v-card-text>
            <pie-chart v-if="countriesData" :data="countriesData" />
            <div v-else class="text-xs-center">
              <v-progress-circular indeterminate color="primary" />
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md6 xl4>
        <v-card height="100%">
          <v-card-title>
            <div>
              <div class="headline">Więzienia</div>
              <div>Liczba blokad według więzień</div>
            </div>
          </v-card-title>
          <v-card-text>
            <pie-chart v-if="jailsData" :data="jailsData" />
            <div v-else class="text-xs-center">
              <v-progress-circular indeterminate color="primary" />
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md6 xl4>
        <v-card>
          <v-card-title>
            <div>
              <div class="headline">Dni tygodnia</div>
              <div>Liczba blokad według dni tygodnia</div>
            </div>
          </v-card-title>
          <v-card-text>
            <bar-chart
              v-if="daysData"
              :labels="daysLabels"
              :values="daysData"
            />
            <div v-else class="text-xs-center">
              <v-progress-circular indeterminate color="primary" />
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <div>
              <div class="headline">Serwery</div>
              <div>Dane z poszczególnych serwerów</div>
            </div>
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
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <div>
              <div class="headline">Agresorzy</div>
              <div>Agresorzy z największą liczbą blokad</div>
            </div>
          </v-card-title>
          <aggressors-table />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import WorldMap from '../components/WorldMap';
import AggressorsTable from '../components/AggressorsTable';

export default {
  name: 'Home',
  components: {
    PieChart,
    BarChart,
    WorldMap,
    AggressorsTable
  },
  data: () => ({
    headers: [
      { value: 'host', text: 'Host' },
      { value: 'port', text: 'Port' },
      { value: 'bans', text: 'Blokady' }
    ],
    daysLabels: [
      'niedziela',
      'poniedziałek',
      'wtorek',
      'środa',
      'czwartek',
      'piątek'
    ]
  }),
  computed: {
    ...mapGetters({
      countriesData: 'countries/data',
      jailsData:     'jails/data',
      serversData:   'servers/data',
      daysData:      'days/data'
    })
  },
  created() {
    this.$store.dispatch('countries/fetchData');
    this.$store.dispatch('jails/fetchData');
    this.$store.dispatch('servers/fetchData');
    this.$store.dispatch('days/fetchData');
  }
};
</script>
