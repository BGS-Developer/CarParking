import routePaths from "@/router/paths"
export default {
  namespaced: true,
  state: {
    list: [
      {
        id: 1,
        url: routePaths.parkings,
        iconName: 'parking',
        name: 'Parking Lots',
        notifications: 0
      }, {
        id: 2,
        url: routePaths.parkingsSpaces,
        iconName: 'truck',
        name: 'Parking Spaces',
        notifications: 0
      }, {
        id: 3,
        url: routePaths.leads,
        iconName: 'briefcase',
        name: 'Leads',
        notifications: 0
      }, {
        id: 4,
        url: routePaths.customers,
        iconName: 'customers',
        name: 'Customers',
        notifications: 5
      }, {
        id: 5,
        url: routePaths.sublease,
        iconName: 'briefcase',
        name: 'Sublease',
        notifications: 0
      }, {
        id: 6,
        url: routePaths.bookings,
        iconName: 'bookings',
        name: 'Bookings',
        notifications: 0
      }, {
        id: 7,
        url: routePaths.payments,
        iconName: 'dollar',
        name: 'Payments',
        notifications: 0
      }, {
        id: 8,
        url: routePaths.waitingList,
        iconName: 'book-open',
        name: 'WaitingList',
        notifications: 0
      }, {
        id: 9,
        url: routePaths.tasks,
        iconName: 'briefcase',
        name: 'Tasks',
        notifications: 0
      }, {
        id: 10,
        url: routePaths.ratings,
        iconName: 'annotation',
        name: 'Ratings',
        notifications: 0
      }, {
        id: 11,
        url: routePaths.reports,
        iconName: 'dash',
        name: 'Reports',
        notifications: 0
      }, {
        id: 12,
        url: routePaths.archive,
        iconName: 'book-open',
        name: 'Archive',
        notifications: 0
      }, {
        id: 13,
        url: routePaths.activityLog,
        iconName: 'presentation-chart-bar',
        name: 'Activity Log',
        notifications: 0
      }, {
        id: 14,
        url: routePaths.settings,
        iconName: 'settings',
        name: 'Settings',
        notifications: 0
      }
    ]
  },
  mutations: {
    set(state, list) {
        state.list = list
    }
  },
  getters: {
    convertedList(state) {
        return state.list
    }
  },
}
