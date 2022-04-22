<template>
  <div :class="['menu-list', {'active': isActive}]">
    <VItem v-for="item in list" v-bind="item" :key="item.id" />
  </div>
</template>

<script>
import VItem from "./Item"
export default {
  components: {
    VItem
  },

  props: {
    list: {
      type: Array,
      default: () => []
    },
    isActive: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-list {
  height: calc(100vh - 166px);
  overflow-y: auto;
  border-top: 1px solid #E1E6EC;
  &.active {
    height: calc(100vh - 127px);
  }
}

</style>