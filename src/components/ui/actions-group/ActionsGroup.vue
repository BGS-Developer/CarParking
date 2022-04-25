<template>
  <div class="actions-group">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.actions-group {
  display: flex;
  & > * {
    border: 1px solid var(--border-color) !important;
    color: var(--primary-text);

    &:first-child {
      border-radius: 4px 0 0 4px;
    }
    &:last-child {
      border-radius: 0 4px 4px 0;
    }
  }
}
</style>