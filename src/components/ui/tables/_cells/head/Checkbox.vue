<template>
  <VCellLayout class="cell-checkbox" width="50px">
    <VCheckbox
      :value.sync="value" />
  </VCellLayout>
</template>

<script>
import mixin from "./_mixin"
import VCheckbox from "@/components/ui/form/checkbox"
export default {
  mixins: [mixin],

  components: {
    VCheckbox
  }
}
</script>

<style lang="scss" scoped>
.cell-checkbox {
  height: 32px;

  & > * {
    margin-bottom: -4px;
  }
}
</style>