<template>
  <div class="icon-wrapper">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.icon-wrapper {
  width: 32px;
  height: 32px;
  padding: 7px;
  border-radius: 4px;
  background: #F6F7FB;
  cursor: pointer;
  svg {
    width: 16px;
    height: 16px;
    color: var(--primary);
  }
}
</style>