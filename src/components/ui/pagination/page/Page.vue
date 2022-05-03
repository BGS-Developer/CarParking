<template>
  <div class="page-pagination">
    <div :class="['arrow-left', {'disabled': prevDisabled}]" @click="prev">
      <VIconArrow />
    </div>

    <div class="rows-count">
      {{from}} <span class="line">-</span> {{to}} of {{total}}
    </div>

    <div :class="['arrow-right', {'disabled': to === total}]" @click="next">
      <VIconArrow />
    </div>
  </div>
</template>

<script>
import { VIconArrow } from "@/components/svg-icons"
export default {
  components: {
    VIconArrow
  },

  props: {
    page: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 50
    },
    total: {
      type: Number,
      default: 0
    }
  },

  methods: {
    prev() {
      if (this.prevDisabled) return
      this.$emit('prev')
    },
    next() {
      if (this.nextDisabled) return
      this.$emit('next')
    }
  },

  computed: {
    from() {
      const rowsFrom = (this.page - 1) * this.size + 1
      return this.total > rowsFrom
        ? rowsFrom
        : this.total
    },

    to() {
      const rowsTo = this.page * this.size
      return this.total > rowsTo
        ? rowsTo
        : this.total
    },

    prevDisabled() {
      return this.from === 1
    },

    nextDisabled() {
      return this.to === this.total
    }
  }
}
</script>

<style lang="scss" scoped>
.page-pagination {
  display: flex;
  padding: 0 13px;
}
.rows-count {
  padding: 0 8px;
  font-size: 13px;
  line-height: 17px;
  color: var(--primary);
}
.arrow {
  &-left, &-right {
    cursor: pointer;
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary);
    &:hover {
      color: var(--highlight);
    }
    & > svg {
      width: 11px;
      height: 11px;
    }
    &.disabled {
      color: var(--icons-actions);
    }
  }

  &-right {
    transform: rotate(180deg);
    margin-top: 1px;
  }
}
.line {
  color: var(--icons-actions)
}
</style>