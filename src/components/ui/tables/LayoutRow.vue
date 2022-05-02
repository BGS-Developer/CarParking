<template>
  <tr :class="['row-body', {'clickable': isClickable}]">
    <slot />
  </tr>
</template>

<script>
export default {
  props: {
    isClickable: Boolean
  }
}
</script>

<style lang="scss" scoped>
.row-body {
  &.clickable {
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: var(--bg-color);
    }
  }
  
}
</style>