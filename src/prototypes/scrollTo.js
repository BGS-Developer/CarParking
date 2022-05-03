import Vue from 'vue'

Vue.prototype.$scrollToTop = (el = 'window') => el.scrollTo({
  top: 0,
  behavior: 'smooth',
})