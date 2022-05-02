<template>
  <div>
    <VProfileTop
      :data="data"
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
      <VCardsStatistic :list="listStatistic" :gridColumns="3" />

      <VContactPersons
        :data="contactPersons" />

      <VInfo :data="info" />
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import VProfileTop from "@/components/parking/profile-top"
import VCardsStatistic from "@/components/cards-statistic"
import VContactPersons from "@/components/parking/contact-persons"
import VInfo from "@/components/parking/info"

export default {
  name: 'Parking',
  components: {
    VProfileTop,
    VCardsStatistic,
    VContactPersons,
    VInfo,
  },

  data: () => ({
    data: {
      imageSrc: "https://st.depositphotos.com/1812648/1480/i/600/depositphotos_14802233-stock-photo-autotrucks.jpg",
      title: "Oxford Valley",
      address: "500 S Lombard Rd, Unit A Addison, IL 60101"
    },

    contactPersons: [
      {
        id: 1,
        name: 'Ivan Muratov',
        position: 'Manager #1',
        phone: '+3138260022',
        email: 'alexterr@gmail.com'
      },
      {
        id: 2,
        name: 'Ivan Muratov',
        position: 'Manager #1',
        phone: '+3138260022',
        email: 'alexterr@gmail.com'
      },
      {
        id: 3,
        name: 'Ivan Muratov',
        position: 'Manager #1',
        phone: '+3138260022',
        email: 'alexterr@gmail.com'
      }
    ],

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
    ...mapActions({
      fetchParkingData: 'Parking/fetchData'
    }),

    findCategoryList(search) {
      //TODO add request
      console.log('search', search)
    },
  },

  computed: {
    ...mapState({
      isLoaded: state => state.Parking.isLoaded
    }),

    ...mapGetters({
      parking: 'Parking/data',
    })
  }
}
</script>

