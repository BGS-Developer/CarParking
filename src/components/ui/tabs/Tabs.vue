<template>
  <div class="tabs">
    <div :class="['tab', {'active': item.id === activeId}]" 
        v-for="item in list" :key="item.id" 
        @click="setActiveId(item.id)">

        <span class="name">{{item.name}}</span>

        <span class="count" v-if="item.count">{{item.count}}</span>
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
        default: 0
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
    display: flex;
    padding: 4px 8px;
    color: var(--sec-text);
    cursor: pointer;
    &.active {
        color: var(--highlight);
        .count {
            background-color: var(--select);
        }
    }
    &:hover:not(.active) {
        color: var(--highlight-dm);
    }
}
.name {
    font-size: 13px;
    line-height: 15px;
}
.count {
    display: block;
    font-size: 10px;
    line-height: 16px;
    border-radius: 13px;
    background-color: var(--bg-color);
    padding: 1px 6px;
    margin-left: 4px;
    margin-top: -1px;
}
</style>