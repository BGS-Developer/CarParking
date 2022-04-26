<template>
  <div class="button-without-bg">
    <div class="icon" v-if="iconName">
      <component :is="`v-icon-${iconName}`" />
    </div>
    
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
    ...require("@/components/svg-icons"),
    VNumberNotifications
  },

  props: {
    iconName: {
      type: String,
      default: ''
    },
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
.icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  margin-top: 1px;
}
.notification {
  margin-left: 8px;
}
</style>