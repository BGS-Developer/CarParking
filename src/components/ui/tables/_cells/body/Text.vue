<template>
  <VCellLayout class="cell-text">
    {{ value }}
  </VCellLayout>
</template>

<script>
import mixin from "./_mixin"
export default {
  mixins: [mixin]
}
</script>

<style lang="scss" scoped>
.cell-text {
  color: var(--primary-text);
}
</style>