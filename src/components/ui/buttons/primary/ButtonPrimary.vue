<template>
  <button :class="['button button-primary', {'disabled': disabled}]">
    <div class="text">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    text: {
        type: String,
        default: ''
    },
    disabled: Boolean
  }
}
</script>

<style lang="scss" scoped>
.button-primary {
  border: 1px solid #3879F0;
  background: #3879F0;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(5, 28, 63, 0.1);
  &.disabled {
    border: 1px solid #98b4e6;
    background: #98b4e6;
  }
  &:hover {
    border: 1px solid #6195f6;
    background: #6195f6;
  }
}
.text {
  font-weight: bold;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}
</style>