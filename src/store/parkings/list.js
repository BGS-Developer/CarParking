import axios from 'axios'

import ROUTER_PATHS from "@/constants/router-paths"
import testParkingsData from "@/_test-data/parkings"

export default {
  namespaced: true,

  state: {
    list: [],
    totalRows: 0,
    isLoaded: false
  },

  mutations: {
    SET_LIST(state, list) {
      state.list = list
    },
    SET_TOTAL(state, total) {
      state.totalRows = total
    },
    SET_IS_LOADED(state, isLoaded = false) {
      state.isLoaded = isLoaded
    }
  },

  actions: {
    fetchList(ctx, params) {
      return new Promise((resolve, reject) => {
        ctx.commit('SET_IS_LOADED', false)

        // TODO: set url
        axios
          .get('https://jsonplaceholder.typicode.com/todos/1', {
            params
          })
          .then(response => {
            ctx.commit('SET_LIST', /* response.data.data */ testParkingsData.list)
            ctx.commit('SET_TOTAL', /* response.data.data */ testParkingsData.total)

            // TODO: remove setTimeout after add real request
            setTimeout(() => {
              ctx.commit('SET_IS_LOADED', true)
              resolve(response);
            }, 500)
            
          }, error => {
            reject(error);
          })
      })
    },
  },

  getters: {
    list(state) {
      return state.list.map(item => ({
        ...item,
        linkUrl: `${ROUTER_PATHS.parkings}/${item.id}`
      }))
    }
  }
}