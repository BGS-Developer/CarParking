<template>
  <VTable
    :data="parkings"
    :filters="filters"
    :columns="columns"
    :actionsTable="actionsTable"
    :actionsRow="actionsRow"
    :indent="'375px'"
    :totalRows="totalRows"
    :isLoaded="isLoaded"
    @changeFilters="reFetchTableDate" />
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import { filterSearch, filterShowRows, filterPage } from "@/components/ui/filters/filtersList"
import ROUTER_PATHS from "@/constants/router-paths"
import ACTIONS_TYPES from "@/constants/actions-types"
import { actionOpen, actionEdit, actionCopyLink, actionPinToTop, actionMakeInactive } from "@/constants/lists/actions-row"

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

    actionsTable: [
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

    actionsRow: [
      {
        ...actionOpen,
        disabled: true
      }, 
      {
        ...actionEdit,
        disabled: true
      }, 
      actionCopyLink, 
      {
        ...actionPinToTop,
        disabled: true
      },
      {
        ...actionMakeInactive,
        disabled: true
      }
    ]
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
      totalRows: state => state.Parkings.totalRows,
      isLoaded: state => state.Parkings.isLoaded
    }),

    ...mapGetters({
      parkings: 'Parkings/list',
    })
  }
}
</script>