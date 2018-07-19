<template>
  <v-data-table
    :headers="headers"
    :items="data || []"
    :loading="!data"
    hide-actions
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.ip }}</td>
      <td>{{ props.item.country | country }}</td>
      <td>{{ props.item.bans }}</td>
      <td>{{ props.item.last_banned | date }}</td>
      <td>{{ props.item.last_bantime }}</td>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex';
import country from '../filters/country';
import date from '../filters/date';

export default {
  name: 'AggressorsTable',
  filters: {
    country,
    date
  },
  data: () => ({
    headers: [
      { value: 'ip',           text: 'IP'               },
      { value: 'country',      text: 'Kraj'             },
      { value: 'bans',         text: 'Blokady'          },
      { value: 'last_banned',  text: 'Ostatnio'         },
      { value: 'last_bantime', text: 'Ostatnia blokada' }
    ]
  }),
  computed: {
    ...mapGetters('aggressors', ['data'])
  },
  created() {
    this.$store.dispatch('aggressors/fetchData');
  }
};
</script>
