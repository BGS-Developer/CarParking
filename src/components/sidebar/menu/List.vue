<template>
  <div :class="['menu-list', {'active': isActive}]">
    <VItem v-for="item in list" v-bind="item" :isActive="isActive" :key="item.id" />
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
  &.active {
    height: calc(100vh - 119px);
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: #051C3F;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4981e9;
    border-radius: 20px; 
    border: 1px solid #4981e9;
  }
}

</style>