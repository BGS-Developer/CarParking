<template>
  <div class="content-wrapper">
    <div class="title">
      {{ title }}
    </div>

    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
}
.title {
  width: 170px;
  font-size: 16px;
  text-align: right;
  color: var(--primary-text);
  padding-top: 12px;
}
.content {
  width: calc(100% - 170px);
  padding-left: 44px;
}
</style>