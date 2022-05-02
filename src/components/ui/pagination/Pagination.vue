<template>
  <div class="pagination">
    <div class="select-show-rows">
      <span>Show rows:</span>

      <VSelectRows
        :value="rowsCount"
        @change="setShowRows" />
    </div>

    <div class="pages">

    </div>
  </div>
</template>

<script>
import VSelectRows from "./select-rows"
import FILTERS_TYPES from "@/constants/filters-types"
export default {
  components: {
    VSelectRows
  },

  props: {
    filters: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    setShowRows(value) {
      this.filterShowRows.value = value
      this.emit()
    },
    emit() {
      this.$emit('change')
    }
  },

  computed: {
    filterShowRows() {
      return this.filters.find(filter => filter.type === FILTERS_TYPES.show_rows)
    },
    rowsCount() {
      return this.filterShowRows && this.filterShowRows.value
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  padding: 12px 24px;
  background-color: var(--pagination-bg);
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.select-show-rows {
  display: flex;
}
</style>