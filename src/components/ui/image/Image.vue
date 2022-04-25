<template>
  <div :class="['image-wrapper', {'rounded': hasRounded}]">
    <img :src="src" :alt="alt">
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    hasRounded: Boolean
  }
}
</script>

<style lang="scss" scoped>
.image-wrapper {
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  &.rounded {
    border-radius: 80px;
  }
}
</style>