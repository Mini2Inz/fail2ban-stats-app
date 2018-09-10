<template>
  <v-container fluid grid-list-md class="pa-2">
    <v-layout wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <div v-if="countriesPending" class="text-xs-center">
              <v-progress-circular indeterminate color="primary" />
            </div>
            <world-map v-else :data="countriesData" />
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
            <v-spacer />
            <v-flex xs12 sm6 lg4>
              <v-select
                :items="periodOptions"
                :value="countriesPeriod"
                @change="setCountriesPeriod"
                prepend-icon="access_time"
                hide-details
                class="mt-0"
              />
            </v-flex>
          </v-card-title>
          <v-card-text>
            <div v-if="countriesPending" class="text-xs-center">
              <v-progress-circular indeterminate color="primary" />
            </div>
            <pie-chart
              v-else-if="countriesData"
              :data="countriesData"
              :label-filter="countryFilter"
            />
            <no-data-icon v-else />
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
            <v-spacer />
            <v-flex xs12 sm6 lg4>
              <v-select
                :items="periodOptions"
                :value="jailsPeriod"
                @change="setJailsPeriod"
                prepend-icon="access_time"
                hide-details
                class="mt-0"
              />
            </v-flex>
          </v-card-title>
          <v-card-text>
            <div v-if="jailsPending" class="text-xs-center">
              <v-progress-circular indeterminate color="primary" />
            </div>
            <pie-chart v-else-if="jailsData" :data="jailsData" />
            <no-data-icon v-else />
          </v-card-text>
        </v-card>
      </v-flex>
      <!--<v-flex xs12 md6 xl4>
        <v-card>
          <v-card-title>
            <div>
              <div class="headline">Dni tygodnia</div>
              <div>Liczba blokad według dni tygodnia</div>
            </div>
          </v-card-title>
          <v-card-text>
            <div v-if="daysPending" class="text-xs-center">
              <v-progress-circular indeterminate color="primary" />
            </div>
            <bar-chart
              v-else-if="daysData"
              :labels="daysLabels"
              :values="daysData"
            />
            <no-data-icon v-else />
          </v-card-text>
        </v-card>
      </v-flex>-->
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
import { mapGetters, mapActions } from 'vuex';
import country from '../filters/country';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import WorldMap from '../components/WorldMap';
import AggressorsTable from '../components/AggressorsTable';
import NoDataIcon from '../components/NoDataIcon';

export default {
  name: 'Home',
  components: {
    PieChart,
    BarChart,
    WorldMap,
    AggressorsTable,
    NoDataIcon
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
    ],
    periodOptions: [
      { text: 'Ostatni dzień',   value: 'day'   },
      { text: 'Ostatni tydzień', value: 'week'  },
      { text: 'Ostatni miesiąc', value: 'month' }
    ],
  }),
  computed: {
    ...mapGetters({
      countriesPeriod:  'countries/period',
      countriesPending: 'countries/pending',
      countriesData:    'countries/data',
      jailsPeriod:      'jails/period',
      jailsPending:     'jails/pending',
      jailsData:        'jails/data',
      serversData:      'servers/data',
      daysPending:      'days/pending',
      daysData:         'days/data'
    })
  },
  watch: {
    countriesPeriod() {
      this.$store.dispatch('countries/fetchData');
    },
    jailsPeriod() {
      this.$store.dispatch('jails/fetchData');
    }
  },
  methods: {
    ...mapActions({
      setCountriesPeriod: 'countries/setPeriod',
      setJailsPeriod:     'jails/setPeriod'
    }),
    countryFilter: country
  },
  created() {
    this.$store.dispatch('countries/fetchData');
    this.$store.dispatch('jails/fetchData');
    this.$store.dispatch('servers/fetchData');
    this.$store.dispatch('days/fetchData');
  }
};
</script>
