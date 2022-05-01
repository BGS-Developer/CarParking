<template>
  <VLayout>
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
  </VLayout>
</template>

<script>
import VLayout from '@/layouts/Main'
export default {
  name: 'Home',
  components: {
    VLayout
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
