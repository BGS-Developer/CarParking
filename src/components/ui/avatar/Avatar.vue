<template>
  <div :class="['avatar', size]">
    <img :src="src" :alt="alt" onerror="this.src='/notfound.png';">
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '/notfound.png'
    },
    alt: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  border: 2px solid #e1e6ec;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  &.small {
    width: 32px;
    height: 32px;
  }
  &.base {
    width: 64px;
    height: 64px;
  }
}
</style>