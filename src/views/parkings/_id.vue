<template>
  <VLayout 
    hasSidebarCategory 
    :sidebarCategoryList="listParkings"
    @getCategorySearch="findCategoryList">

    <span>Test</span>

    <VCardsStatistic :list="listStatistic" :gridColumns="3" />
  </VLayout>
</template>

<script>
import VLayout from '@/layouts/Main'
import VCardsStatistic from "@/components/cards-statistic"
export default {
  name: 'Parking',
  components: {
    VLayout,
    VCardsStatistic
  },

  data: () => ({
    listParkings: [
      {
        id: 1,
        url: '/parkings/1',
        name: 'Oxford Valley',
        description: '10 Blair Road, Glen Waverley, Vic...'
      }, {
        id: 2,
        url: '/parkings/2',
        name: 'Ashton',
        description: '10 Blair Road, Glen Waverley, Vic...'
      }, {
        id: 3,
        url: '/parkings/3',
        name: 'Easkarton Shopping Mall',
        description: '10 Blair Road, Glen Waverley, Vic...'
      }, {
        id: 4,
        url: '/parkings/4',
        name: 'Oxford Valley (New)',
        description: '10 Blair Road, Glen Waverley, Vic...'
      }, {
        id: 5,
        url: '/parkings/5',
        name: 'Parking Name',
        description: '10 Blair Road, Glen Waverley, Vic...'
      }
    ],

    listStatistic: [
      {
        id: 1,
        name: 'Current revenue',
        value: 298
      }, {
        id: 2,
        name: 'Available spaces',
        value: 40,
        status: 'success'
      }, {
        id: 3,
        name: 'All spaces',
        value: 364,
        status: 'default',
        hasEdit: true
      }
    ]
  }),

  methods: {
    findCategoryList(search) {
      //TODO add request
      console.log('search', search)
    }
  }
}
</script>
