<template>
  <VLayout 
    hasSidebarCategory 
    :sidebarCategoryList="listParkings"
    @getCategorySearch="findCategoryList">

    <VProfileTop 
      :imageSrc="imageSrc"
      :title="title"
      :tabs="tabs.list"
      :activeTabId="tabs.activeId"
      @changeActiveTabId="setActiveTabId" />

    <div v-if="tabs.list[1].id === tabs.activeId">
      Test1
    </div>

    <div v-else-if="tabs.list[2].id === tabs.activeId">
      Test2
    </div>

    <div v-else-if="tabs.list[3].id === tabs.activeId">
      Test3
    </div>
    
    <div v-else>
      <VCardsStatistic :list="listStatistic" :gridColumns="3" />

      <VInfo :data="info" />
    </div>

    
  </VLayout>
</template>

<script>
import VLayout from '@/layouts/Main'
import VProfileTop from "@/components/page-tops/single"
import VCardsStatistic from "@/components/cards-statistic"
import VInfo from "@/components/parking/info"
export default {
  name: 'Parking',
  components: {
    VLayout,
    VProfileTop,
    VCardsStatistic,
    VInfo
  },

  data: () => ({
    imageSrc: "https://st.depositphotos.com/1812648/1480/i/600/depositphotos_14802233-stock-photo-autotrucks.jpg",
    title: "Oxford Valley",
    tabs: {
      list: [
        {
          id: 1,
          name: 'General'
        }, {
          id: 2,
          name: 'Documents'
        }, {
          id: 3,
          name: 'Customers'
        }, {
          id: 4,
          name: 'Notes'
        }, {
          id: 5,
          name: 'Bookings',
          disabled: true
        }, {
          id: 6,
          name: 'Payments',
          disabled: true
        }, {
          id: 7,
          name: 'Parking spaces',
          disabled: true
        }, {
          id: 8,
          name: 'Rating',
          disabled: true
        }
      ],
      activeId: 1
    },

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
    ],

    info: {

    }
  }),

  methods: {
    findCategoryList(search) {
      //TODO add request
      console.log('search', search)
    },

    setActiveTabId(id) {
      this.tabs.activeId = id
    }
  }
}
</script>
