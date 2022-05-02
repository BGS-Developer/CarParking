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
