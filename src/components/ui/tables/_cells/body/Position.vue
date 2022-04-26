<template>
  <VCellLayout class="cell-position">
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
.cell-position {
  color: var(--sec-text);
}
</style>