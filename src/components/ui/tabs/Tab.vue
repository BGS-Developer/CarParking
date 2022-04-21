<template>
  <div class="tab">
    <slot />
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
    setActiveId(id) {
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
    padding: 4px 8px;
    color: #52647E;
    cursor: pointer;
    &.active {
        color: #3879F0;
        .count {
            background-color: #f6f6f6;
        }
    }
    &:hover:not(.active) {
        color: #6196f5;
    }
}
.name {
    font-size: 13px;
    line-height: 15px;
}
.count {
    font-size: 10px;
    line-height: 16px;
    border-radius: 13px;
    background-color: #f4efef;
    padding: 2px 5px;
    margin-left: 4px;
}
</style>