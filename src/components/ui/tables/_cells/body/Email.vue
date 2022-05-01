<template>
  <VCellLayout class="cell-email">
    <div class="cell-email__inner">
      <span>
        {{ value }}
      </span>

      <span v-if="hasSend" class="button-send-email" @click="sendEmail">
        Send email
      </span>
    </div>
  </VCellLayout>
</template>

<script>
import mixin from "./_mixin"
export default {
  mixins: [mixin],

  props: {
    hasSend: Boolean
  },

  methods: {
    sendEmail() {
      this.$emit('sendEmail')
    }
  }
}
</script>

<style lang="scss" scoped>
.cell-email {
  color: var(--primary-text);
  &__inner {
    position: relative;
    display: flex;
  }
  &:hover {
    .button-send-email {
      opacity: 1;
    }
  }
}
.button-send-email {
  cursor: pointer;
  opacity: 0;
  color: var(--highlight);
  position: absolute;
  top: -1px;
  right: 0;
  padding: 2px 3.5px;
  transition: .2s;
  &:hover {
    color: var(--highlight-dm);
  }
}
</style>