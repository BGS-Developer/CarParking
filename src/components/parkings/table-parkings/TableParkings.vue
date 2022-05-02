<template>
  <VTable
    :data="parkings"
    :filters="filters"
    :columns="columns"
    :actions="actions"
    :indent="'375px'"
    :isLoaded="isLoaded"
    @changeFilters="reFetchTableDate" />
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import {filterSearch, filterShowRows, filterPage} from "@/components/ui/filters/filtersList"
import ROUTER_PATHS from "@/constants/router-paths"
import ACTIONS_TYPES from "@/constants/actions-types"

import convertParamsToFilter from "@/helpers/setFiltersFromQueryParams"
import convertFilterToParams from "@/helpers/convertFilterToParams"

import VTable from "@/components/ui/tables/base"

export default {
  components: {
    VTable
  },

  data: () => ({

    filters: [
      filterSearch,
      filterShowRows,
      filterPage
    ],

    columns: [
      {
        id: 1,
        name: 'Parking name',
        fieldName: "name",
        type: "link",
        fieldUrl: "linkUrl",
        isActive: true
      },
      {
        id: 2,
        name: 'Address',
        fieldName: "address",
        type: "address",
        isActive: true
      },
      {
        id: 3,
        name: 'Occupancy',
        fieldName: "occupancy",
        type: "text",
        isActive: true
      },
      {
        id: 4,
        name: 'Phone',
        fieldName: "phone",
        type: "phone",
        isActive: true
      },
      {
        id: 5,
        name: 'Email',
        fieldName: "email",
        type: "email",
        isActive: true
      },
      {
        id: 6,
        name: 'Contact person',
        fieldName: "contact_person",
        type: "text",
        isActive: true
      }
    ],

    actions: [
      {
        id: 1,
        type: ACTIONS_TYPES.download
      }, {
        id: 2,
        type: ACTIONS_TYPES.print
      }, {
        id: 3,
        type: ACTIONS_TYPES.customise
      }, 
    ],
  }),

  created() {
    convertParamsToFilter(this.filters)
    this.fetchTableDate()
  },

  methods: {
    ...mapActions({
      fetchParkingsList: 'Parkings/fetchList'
    }),

    reFetchTableDate() {
      this.setUrlParams()
      this.fetchTableDate()
    },

    fetchTableDate() {
      const queryParams = convertFilterToParams(this.filters)

      this.fetchParkingsList(queryParams)
    },

    setUrlParams() {
      const queryParams = convertFilterToParams(this.filters)

      this.$router.replace({ 
        path: ROUTER_PATHS.parkings,
        query: queryParams })
    }
  },

  computed: {
    ...mapState({
      isLoaded: state => state.Parkings.isLoaded
    }),

    ...mapGetters({
      parkings: 'Parkings/list',
    })
  }
}
</script>