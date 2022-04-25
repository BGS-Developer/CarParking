<template>
  <div class="tabs">
    <div :class="['tab', {'active': item.id === activeId}, {'disabled': item.disabled}]" 
        v-for="item in list" :key="item.id" 
        @click="setActiveId(item.id, item.disabled)">

        <span class="name">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    activeId: {
      type: Number,
      default: 1
    }
  },

  methods: {
    setActiveId(id, isDisabled) {
      if (isDisabled) return

      this.$emit('update:activeId', id)
      this.$emit('change', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
    display: flex;
}
.tab {
    position: relative;
    display: flex;
    padding: 11px 8px;
    color: var(--sec-text);
    cursor: pointer;
    &.active {
        color: var(--primary-text);
        &:after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            width: calc(100% - 16px);
            height: 2px;
            background-color: var(--highlight);
        }
    }
    &:hover:not(.active):not(.disabled) {
        color: #6196f5;
    }
    &.disabled {
      opacity: .7;
      cursor: default;
    }
}
.name {
    font-size: 13px;
    line-height: 15px;
}
</style>