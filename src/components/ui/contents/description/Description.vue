<template>
  <VLayout :title="title">
    <div class="description-wrapper">
      <slot />
    </div>
  </VLayout>
</template>

<script>
import mixin from "./../mixin"
export default {
  mixins: [mixin],
}
</script>

<style lang="scss" scoped>
.description-wrapper {
  padding: 12px;
  color: #000F26;
}
</style>