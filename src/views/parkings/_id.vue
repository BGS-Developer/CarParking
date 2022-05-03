<template>
  <div class="page-parking">
    <template v-if="loadedPage">
      <VProfileTop
        :data="parkingData"
        :tabs="tabs" />

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
        <VCardsStatistic 
          :list="listStatistic" 
          :gridColumns="3" />

        <VContactPersons
          :data="parkingData.contact_persons" />

        <VInfo />
      </div>
    </template>

    <VPreloader v-show="!isLoaded" isAbsolute />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import VProfileTop from "@/components/parking/profile-top"
import VCardsStatistic from "@/components/cards-statistic"
import VContactPersons from "@/components/parking/contact-persons"
import VInfo from "@/components/parking/info"
import VPreloader from "@/components/ui/preloader"

export default {
  name: 'Parking',
  components: {
    VProfileTop,
    VCardsStatistic,
    VContactPersons,
    VInfo,
    VPreloader
  },

  data: () => ({
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

    loadedPage: false
  }),

  methods: {
    ...mapActions({
      fetchParkingData: 'Parking/fetchData'
    }),

    findCategoryList(search) {
      //TODO add request
      console.log('search', search)
    }
  },

  computed: {
    ...mapState({
      isLoaded: state => state.Parking.isLoaded
    }),

    ...mapGetters({
      parkingData: 'Parking/data',
    }),

    listStatistic() {
      return [
        {
          id: 1,
          name: 'Current revenue',
          value: this.parkingData && this.parkingData.analytics &&  this.parkingData.analytics.current_revenue
        }, {
          id: 2,
          name: 'Available spaces',
          value: this.parkingData && this.parkingData.analytics && this.parkingData.analytics.available_spaces,
          status: 'success'
        }, {
          id: 3,
          name: 'All spaces',
          value: this.parkingData && this.parkingData.analytics && this.parkingData.analytics.all_spaces,
          status: 'default',
          hasEdit: true
        }
      ]
    },
  },

  watch: {
    '$route.path': {
      immediate: true,
      handler() {
        this.fetchParkingData()
      }
    },

    isLoaded() {
      this.loadedPage = true
    }
  }
}
</script>
