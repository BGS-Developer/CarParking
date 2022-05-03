<template>
  <div class="pagination">
    <div class="select-show-rows">
      <span>Show rows:</span>

      <VSelectRows
        :value="rowsCount"
        @change="setShowRows" />
    </div>

    <div class="pages">
      <VPage
        :page="activePage"
        :size="+rowsCount"
        :total="totalRows"
        @prev="prevPage"
        @next="nextPage" />
    </div>
  </div>
</template>

<script>
import VSelectRows from "./select-rows"
import FILTERS_TYPES from "@/constants/filters-types"
import VPage from "./page"
export default {
  components: {
    VSelectRows,
    VPage
  },

  props: {
    filters: {
      type: Array,
      default: () => []
    },
    totalRows: {
      type: Number,
      default: 0
    }
  },

  methods: {
    setShowRows(value) {
      this.filterShowRows.value = value
      this.emit()
    },

    prevPage() {
      this.filterActivePage.value = (+this.filterActivePage.value - 1).toString()
      this.emit()
    },

    nextPage() {
      this.filterActivePage.value = (+this.filterActivePage.value + 1).toString()
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
    filterActivePage() {
      return this.filters.find(filter => filter.type === FILTERS_TYPES.page)
    },
    rowsCount() {
      return this.filterShowRows && this.filterShowRows.value
    },
    activePage() {
      return this.filterActivePage && this.filterActivePage.value && +this.filterActivePage.value || 1
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