<template>
  <div class="actions">
    <div class="action" v-for="action in actions" :key="action.id">
      <div class="action-button"
        v-if="action.type === actionsTypes.download"
        @click="download">

        <VIconDownload />
      </div>
      
      <div class="action-button"
        v-else-if="action.type === actionsTypes.print"
        @click="print">
        
        <VIconPrint />
      </div>

      <VDropdownMultiSelect 
        v-else-if="action.type === actionsTypes.customise"
        :listTitle="'Columns settings'"
        :list="columns">
        
        <div class="action-button">
          <VIconGear />
        </div>
      </VDropdownMultiSelect>
    </div>
  </div>
</template>

<script>
import ACTIONS_TYPES from "@/constants/actions-types"
import { VIconDownload, VIconPrint, VIconGear } from "@/components/svg-icons"

import VDropdownMultiSelect from "@/components/ui/dropdowns/multi-select"

export default {
  components: {
    VIconDownload,
    VIconPrint,
    VIconGear,

    VDropdownMultiSelect
  },

  props: {
    actions: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
  },

  methods: {
    download() {
      this.$emit('download')
    },
    print() {
      this.$emit('print')
    },
    customise() {
      this.$emit('customise')
    }
  },

  computed: {
    actionsTypes() {
      return ACTIONS_TYPES
    }
  }
}
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  align-items: center;
}

.action {
  margin-left: 4px;
  
  &-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    min-width: 32px;
    width: 32px;
    height: 32px;
    color: var(--icons-actions);
    cursor: pointer;
    transition: 0.115s;

    &:hover {
      background-color: var(--highlight);
      color: var(--white-text)
    }
  }

  & > .opened {
    .action-button {
      background-color: var(--highlight);
      color: var(--white-text)
    }
  }
}

</style>