<template>
  <div>
    <VProfileTop 
      :tabs="tabs.list" 
      :activeTabId="tabs.activeId"
      @changeActiveTabId="setActiveTabId" />

    <div v-if="tabs.list[1].id === tabs.activeId">
      Tab: Active 
    </div>

    <div v-else-if="tabs.list[2].id === tabs.activeId">
      Tab: Pending
    </div>

    <div v-else-if="tabs.list[3].id === tabs.activeId">
      Tab: Cancelled      
    </div>
    
    <div v-else>
      <VCardsStatistic 
        :list="listStatistic" />

      <VTableParkings />
    </div>
  </div>
</template>

<script>
import VProfileTop from "@/components/page-tops/category"
import VCardsStatistic from "@/components/cards-statistic"
import VTableParkings from "@/components/parkings/table-parkings"
export default {
  name: 'Parkings',
  components: {
    VProfileTop,
    VCardsStatistic,
    VTableParkings
  },

  data: () => ({
    tabs: {
      list: [
        {
          id: 1,
          name: 'All',
          count: 32
        }, {
          id: 2,
          name: 'Active',
        }, {
          id: 3,
          name: 'Pending'
        }, {
          id: 4,
          name: 'Cancelled'
        }
      ],
      activeId: 1
    },

    listStatistic: [
      {
        id: 1,
        name: 'Current revenue',
        value: 245205,
        totalValue: 254098,
        formatCurrency: 'USD'
      }, {
        id: 2,
        name: 'Expected',
        value: 248100,
        formatCurrency: 'USD',
        status: 'success'
      }, {
        id: 3,
        name: 'Pending',
        value: 1,
        totalValue: 200,
        status: 'pending'
      }, {
        id: 4,
        name: 'Inactivated',
        value: 1,
        status: 'failure',
        hasEdit: true
      }
    ]
  }),

  methods: {
    setActiveTabId(id) {
      this.tabs.activeId = id
    }
  }
}
</script>

