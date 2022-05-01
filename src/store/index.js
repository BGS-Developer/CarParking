import Vue from 'vue'
import Vuex from 'vuex'

import Menu from "./menu"
import User from "./user"
import Parkings from "./parkings/list"
import Parking from "./parkings/one"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Menu,
    User,
    Parkings,
    Parking
  }
})
