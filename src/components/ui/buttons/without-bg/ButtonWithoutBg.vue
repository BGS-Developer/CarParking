<template>
  <div class="button-without-bg">
    <span>{{text}}</span>

    <VNumberNotifications
      v-if="value"
      class="notification"
      :value="value" />
  </div>
</template>

<script>
import VNumberNotifications from "@/components/ui/number-notification"
export default {
  components: {
    VNumberNotifications
  },

  props: {
    text: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.button-without-bg {
  display: flex;
  padding: 6px 16px;
  border: 1px solid transparent;
  cursor: pointer;
}
.notification {
  margin-left: 8px;
}
</style>