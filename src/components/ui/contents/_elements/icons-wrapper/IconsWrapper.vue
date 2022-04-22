<template>
  <div class="icons-wrapper">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.icons-wrapper {
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin-right: 4px;
  }
}
</style>