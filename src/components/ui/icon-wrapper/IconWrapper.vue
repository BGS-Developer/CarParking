<template>
  <div class="icon-wrapper">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-wrapper {
  width: 32px;
  height: 32px;
  padding: 7px;
  border-radius: 4px;
  cursor: pointer;
  svg {
    width: 18px;
    height: 18px;
    color: #B5C0D0;
  }
  &.active, &:hover {
    background: #EBF2FE;
    svg {
      color: #3879F0;
    }
  }
}
</style>