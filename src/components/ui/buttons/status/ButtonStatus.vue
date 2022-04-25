<template>
  <button :class="['button button-status', status, {'disabled': disabled}]">

    <div class="text">
      {{ text || status }}
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
    status: {
      type: String,
      validator: (value) => ['available', 'awaiting', 'cancelled'].includes(value),
      default: 'available',
    },
    disabled: Boolean
  }
}
</script>

<style lang="scss" scoped>
.button-status {
  color: var(--white-text);
  border-radius: 4px;
  padding: 4px 8px;
  width: auto;
  min-height: 26px;
  
  &.available {
    border: 1px solid var(--highlight-green);
    background: var(--highlight-green);
  }
  &.awaiting {
    border: 1px solid var(--ratings);
    background: var(--ratings);
  }
  &.cancelled {
    border: 1px solid var(--error);
    background: var(--error);
  }
  /* &.disabled {
    border: 1px solid #98b4e6;
    background: #98b4e6;
  }
  &:hover {
    border: 1px solid #6195f6;
    background: #6195f6;
  } */
}
.text {
  line-height: 18px;
  color: #FFFFFF;
  &::first-letter {
    text-transform: uppercase;
  }
}
</style>