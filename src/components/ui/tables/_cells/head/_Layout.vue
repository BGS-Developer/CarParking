<template>
  <th class="cell-head">
    <slot />
  </th>
</template>

<script>
export default {
  name: 'VCellLayout'
}
</script>

<style lang="scss" scoped>
.cell-head {
  color: var(--primary-text);
  font-weight: 700;
  padding: 9px 8px;
  text-align: center;
}
</style>