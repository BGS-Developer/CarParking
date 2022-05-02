<template>
  <div class="filters-wrapper">
    <div class="filters">
      <div class="filter" v-for="filter in filters" :key="filter.id">
        <VSearch 
          v-if="filter.type === filtersTypes.search"
          :value.sync="filter.value"
          hasGray
          @change="emit" />

      </div>

      <!-- <VSelectAvailableFilters /> -->
    </div>
  </div>
</template>

<script>
import FILTERS_TYPES from "@/constants/filters-types"

// import VSelectAvailableFilters from "./SelectAvailableFilters"
export default {
  components: {
    VSearch: () => import("@/components/ui/form/search"),
    // VSelectAvailableFilters
  },

  props: {
    filters: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    emit() {
      this.$emit('change')
    }
  },

  computed: {
    filtersTypes() {
      return FILTERS_TYPES
    }
  }
}
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  align-items: center;

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.filter {
  height: 32px;
  margin-right: 8px;
  & > * {
    height: inherit;
  }
}
</style>