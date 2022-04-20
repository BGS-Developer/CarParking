<template>
  <VLayout 
    hasSidebarCategory 
    :sidebarCategoryList="list"
    @getCategorySearch="findCategoryList">

    <span>Test</span>
  </VLayout>
</template>

<script>
import VLayout from '@/layouts/Main'

export default {
  name: 'Parking',
  components: {
    VLayout
  },

  data: () => ({
    list: [
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
