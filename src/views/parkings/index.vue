<template>
  <VLayout>
    <VHeaderCategory />
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
    listStatistic: [
      {
        id: 1,
        name: 'Current revenue',
        value: 245205,
        totalValue: 254098,
        formatCurrency: 'USD',
        status: ''
      }, {
        id: 2,
        name: 'Expected',
        value: 248100,
        totalValue: 0,
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
        totalValue: 0,
        status: 'failure'
      }
    ]
  })
}
</script>

