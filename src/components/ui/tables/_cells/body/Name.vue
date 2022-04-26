<template>
  <VCellLayout class="cell-name">
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
.cell-name {
  font-weight: 700;
  color: var(--primary-text);
}
</style>