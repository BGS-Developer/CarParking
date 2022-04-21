<template>
  <VLayout :title="title">
    <div class="description-wrapper">
      <slot />
    </div>
  </VLayout>
</template>

<script>
import VLayout from "./../Layout"
export default {
  components: {
    VLayout
  },

  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.description-wrapper {
  padding: 12px;
  color: #000F26;
}
</style>