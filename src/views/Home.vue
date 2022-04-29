<template>
  <VLayout>
    <div>
      <RouterView />
    </div>
  </VLayout>
</template>

<script>
import VLayout from '@/layouts/Main'
export default {
  name: 'Home',
  components: {
    VLayout
  },

  data: () => ({
  })
}
</script>

