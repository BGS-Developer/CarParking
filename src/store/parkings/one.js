import axios from 'axios'
import testParkingData from "@/_test-data/parking"

export default {
  namespaced: true,

  state: {
    data: {},
    isLoaded: false
  },

  mutations: {
    SET_DATA(state, data) {
      state.data = data
    },
    SET_IS_LOADED(state, isLoaded = false) {
      state.isLoaded = isLoaded
    }
  },

  actions: {
    fetchData(ctx, params) {
      return new Promise((resolve, reject) => {
        ctx.commit('SET_IS_LOADED', false)

        // TODO: set url
        axios
          .get('https://jsonplaceholder.typicode.com/todos/1', {
            params
          })
          .then(response => {
            ctx.commit('SET_DATA', /* response.data.data */ testParkingData)

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
}