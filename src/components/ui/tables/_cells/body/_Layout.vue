<template>
  <td class="cell-body">
    <slot />
  </td>
</template>

<script>
export default {
  name: 'VCellLayout'
}
</script>

<style lang="scss" scoped>
.cell-body {
  padding: 9px 8px;
}
</style>