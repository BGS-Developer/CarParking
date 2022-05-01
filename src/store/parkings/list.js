import axios from 'axios'
export default {
  namespaced: true,

  state: {
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
  },

  mutations: {
    SET_LIST(state, list) {
      state.list = list
    }
  },

  actions: {
    fetchList(ctx, params) {
      return new Promise((resolve, reject) => {
        // TODO: set url
        axios
          .get('https://jsonplaceholder.typicode.com/todos/1', {
            params
          })
          .then(response => {
            ctx.commit('SET_LIST', response.data.data)
            resolve(response);
          }, error => {
            reject(error);
          })
      })
    },
  },

  getters: {
    list(state) {
      return state.list
    }
  }
}