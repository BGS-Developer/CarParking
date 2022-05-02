<template>
  <VCellLayout class="cell-checkbox" width="50px">
    <VCheckbox
      :value="value"
      @change="emitValue" />
  </VCellLayout>
</template>

<script>
import mixin from "./_mixin"
import VCheckbox from "@/components/ui/form/checkbox"
export default {
  mixins: [mixin],

  components: {
    VCheckbox
  },

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    emitValue(e) {
      this.$emit('change', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.cell-checkbox {
  height: 47px;

  & > * {
    margin-bottom: -4px;
  }
}
</style>