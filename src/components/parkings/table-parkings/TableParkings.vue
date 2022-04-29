<template>
  <VTable
    :data="data"
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
  })
}
</script>