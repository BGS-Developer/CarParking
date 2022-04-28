<template>
  <VTable
    :filters="filters"
    :columns="columns"
    :actions="actions" />
</template>

<script>
import FILTERS_TYPES from "@/constants/filters-types"
import ACTIONS_TYPES from "@/constants/actions-types"

import VTable from "@/components/ui/tables/base"

export default {
  components: {
    VTable
  },

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    filters: [
      {
        id: 1,
        type: FILTERS_TYPES.search,
        value: ''
      }
    ],

    columns: [
      {
        id: 1,
        name: 'Name',
        fieldName: "name",
        type: "name",
        isActive: true
      },
      {
        id: 2,
        name: 'Position',
        fieldName: "position",
        type: "position",
        isActive: true
      },
      {
        id: 3,
        name: 'Phone',
        fieldName: "phone",
        type: "phone",
        isActive: true
      },
      {
        id: 4,
        name: 'Email',
        fieldName: "email",
        type: "email",
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
  })
}
</script>