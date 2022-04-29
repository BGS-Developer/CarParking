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
  font-weight: 400;
  padding: 9px 8px;
  text-align: left;
  font-size: 12px;
  line-height: 16px;
}
</style>