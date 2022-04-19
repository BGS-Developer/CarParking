<template>
  <div class="b-notification">
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>
.b-notification {
  background: #EC424C;
  color: #fff;
  border-radius: 100px;
  padding: 1px 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: -0.3px;
  width: 19px;
  height: 19px;
}
</style>