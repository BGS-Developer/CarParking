<template>
  <VCellLayout class="cell-text" width="50px">
    <VDropdownWithDots 
      class="dropdown-dots" 
      :list="list"
      isClosesAfterSelection
      @change="select" />
  </VCellLayout>
</template>

<script>
import mixin from "./_mixin"
import VDropdownWithDots from "@/components/ui/dropdowns/with-dots"
export default {
  mixins: [mixin],
  
  components: {
    VDropdownWithDots
  },

  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    select(id) {
      const action = this.list.find(item => item.id === id)

      if (action && action.key) {
        this.$emit(action.key)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cell-text {
  color: var(--icons-default);
  &:hover {
    color: var(--primary-text);
  }
}
</style>