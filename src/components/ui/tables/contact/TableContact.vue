<template>
  <div class="table-wrapper">
    <div class="table-wrapper__top">
      <VTitleH2>{{title}}</VTitleH2>

      <VButtonAdd 
        class="button-add"
        :text="textButtonAdd"
        :iconName="'add'"
        @click.native="emitAdd" />
    </div>

    <table class="table">
      <tr v-if="hasHeader">
        <component
          v-for="column in columns" 
          :key="column.id" 
          :is="`v-cell-head-${column.type}`"
          :value="column.name" />
      </tr>

      <VLayoutRow 
        v-for="row in data" 
        :key="row.id"
        isClickable
        @click.native="selectItem(row)" >

        <component
          v-for="column in columns" 
          :key="column.id" 
          :is="`v-cell-body-${column.type}`"
          :value="row[column.fieldName]"
          :hasSend="true"
          @sendEmail="emitSendEmail(row)" />
      </VLayoutRow>
    </table>
  </div>
</template>

<script>
import VLayoutRow from "./../LayoutRow"
import VButtonAdd from "@/components/ui/buttons/without-bg"
import VTitleH2 from "@/components/ui/titles/h2"
export default {
  components: {
    VLayoutRow,
    VButtonAdd,
    VTitleH2,
    
    VCellHeadName: () => import( `@/components/ui/tables/_cells/head/Text`),
    VCellHeadText: () => import( `@/components/ui/tables/_cells/head/Text`),
    VCellHeadPhone: () => import('@/components/ui/tables/_cells/head/Phone'),
    VCellHeadPosition: () => import('@/components/ui/tables/_cells/head/Position'),
    VCellHeadEmail: () => import('@/components/ui/tables/_cells/head/Email'),

    VCellBodyText: () => import( `@/components/ui/tables/_cells/body/Text`),
    VCellBodyName: () => import( `@/components/ui/tables/_cells/body/Name`),
    VCellBodyPhone: () => import('@/components/ui/tables/_cells/body/Phone'),
    VCellBodyPosition: () => import('@/components/ui/tables/_cells/body/Position'),
    VCellBodyEmail: () => import('@/components/ui/tables/_cells/body/Email'),
  },

  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    textButtonAdd: {
      type: String,
      default: 'Add'
    },
    hasHeader: Boolean,
    isClickable: Boolean
  },

  methods: {
    selectItem(item) {
      if (this.isClickable) {
        this.$emit('selectItem', item)  
      }
    },
    emitSendEmail(item) {
      this.$emit('sendEmail', item)
    },
    emitAdd() {
      this.$emit('add')
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  &-wrapper {
    padding: 12px 24px;
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
    .button-add {
      width: auto;
      background: transparent;
      color: var(--sec-text);
      padding: 4px;
      &:hover {
        color: var(--border-color);
      }
    }
  }
  th {
    border: 1px solid var(--border-color-40);
    &:not(th:last-child) {
      border-right: none;
    }
  }

  td {
    border: 1px solid var(--border-color-40);
    &:not(td:last-child) {
      border-right: none;
    }
  }

  tr {
    &:not(tr:last-child) {
      th, td {
        border-bottom: none;
      }
    }
  }

  tr:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    & > *:first-child {
      border-top-left-radius: 4px;
    }
    & > *:last-child {
      border-top-right-radius: 4px;
    }
  }
  tr:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    & > *:first-child {
      border-bottom-left-radius: 4px;
    }
    & > *:last-child {
      border-bottom-right-radius: 4px;
    }
  }
}


</style>