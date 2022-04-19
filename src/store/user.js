export default {
  namespaced: true,
  state: {
    user: {
      id: 1,
      avatar: '',
      name: 'Ivan Ivanov',
      email: 'test@gmail.com'
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },
  getters: {
    convertedUser(state) {
      return state.user
    }
  },
}
