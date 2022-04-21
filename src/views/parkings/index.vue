<template>
  <VLayout>
    <VHeaderCategory :tabs="tabs" />
    <VCardsStatistic :list="listStatistic" />
  </VLayout>
</template>

<script>
import VLayout from '@/layouts/Main'
import VHeaderCategory from "@/components/header-category"
import VCardsStatistic from "@/components/cards-statistic"
export default {
  name: 'Parkings',
  components: {
    VLayout,
    VHeaderCategory,
    VCardsStatistic
  },

  data: () => ({
    tabs: [
      {
        id: 1,
        name: 'All',
        count: 32
      }, {
        id: 2,
        name: 'Active'
      }, {
        id: 3,
        name: 'Pending'
      }, {
        id: 4,
        name: 'Cancelled'
      }
    ],
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
  })
}
</script>

