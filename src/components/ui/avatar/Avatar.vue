<template>
  <div class="avatar">
    <img :src="src" :alt="alt">
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
      default: 'base'
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #e1e6ec;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>