<template>
  <VCellLayout class="cell-text" width="50px">
    <VDropdownWithDots 
      class="dropdown-dots" 
      :list="list"
      isClosesAfterSelection />
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

  data: () => ({
    list: [
      {
        id: 1,
        name: 'Open'
      }, {
        id: 2,
        name: 'Edit'
      }, {
        id: 3,
        name: 'Copy link'
      }, {
        id: 4,
        name: 'Pin to top'
      }, {
        id: 5,
        name: 'Make inactive'
      }
    ]
  })
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