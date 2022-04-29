<template>
  <div class="table-wrapper">
    <div class="filter">
      <VFilters
        :filters="filters"
        :columns="columns" />

      <VActions 
        :actions="actions"
        :columns="columns"
        @download="download"
        @print="print"
        @customise="customise" />
    </div>
    
    <div class="">
      <table class="table">
        <tr class="tr-head">
          <VCellHeadCheckbox />

          <component
            v-for="column in columns" 
            :key="column.id" 
            :is="`v-cell-head-${column.type}`"
            :value="column.name" />

          <VCellHeadText />
        </tr>

        <VLayoutRow 
          class="tr-body"
          v-for="row in data" 
          :key="row.id"
          isClickable
          @click.native="selectItem(row)" >

          <VCellBodyCheckbox />

          <component
            v-for="column in columns" 
            :key="column.id" 
            :is="`v-cell-body-${column.type}`"
            :value="row[column.fieldName]"
            :url="row[column.fieldUrl]"
            @sendEmail="emitSendEmail(row)" />

          <VCellActions />
        </VLayoutRow>
      </table>
    </div>
  </div>
</template>

<script>
import VLayoutRow from "./../LayoutRow"
import VCellActions from "@/components/ui/tables/_cells/body/Actions"
export default {
  components: {
    VLayoutRow,
    VCellActions,

    VFilters: () => import("@/components/ui/filters"),
    VActions: () => import("@/components/ui/actions"),

    VCellHeadCheckbox: () => import( `@/components/ui/tables/_cells/head/Checkbox`),
    VCellHeadLink: () => import( `@/components/ui/tables/_cells/head/Text`),
    VCellHeadName: () => import( `@/components/ui/tables/_cells/head/Text`),
    VCellHeadText: () => import( `@/components/ui/tables/_cells/head/Text`),
    VCellHeadPhone: () => import('@/components/ui/tables/_cells/head/Phone'),
    VCellHeadEmail: () => import('@/components/ui/tables/_cells/head/Email'),
    VCellHeadAddress: () => import( `@/components/ui/tables/_cells/head/Text`),
    VCellHeadPosition: () => import('@/components/ui/tables/_cells/head/Position'),


    VCellBodyCheckbox: () => import( `@/components/ui/tables/_cells/body/Checkbox`),
    VCellBodyText: () => import( `@/components/ui/tables/_cells/body/Text`),
    VCellBodyLink: () => import( `@/components/ui/tables/_cells/body/Link`),
    VCellBodyName: () => import( `@/components/ui/tables/_cells/body/Name`),
    VCellBodyPhone: () => import('@/components/ui/tables/_cells/body/Phone'),
    VCellBodyEmail: () => import('@/components/ui/tables/_cells/body/Email'),
    VCellBodyAddress: () => import( `@/components/ui/tables/_cells/body/Text`),
    VCellBodyPosition: () => import('@/components/ui/tables/_cells/body/Position'),
  },

  props: {
    data: {
      type: Array,
      default: () => []
    },
    filters: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    actions: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    selectItem() {
      /* if (this.isClickable) {
        this.$emit('selectItem', item)  
      } */
    },
    
    download() {

    },
    print() {

    },
    customise() {

    }
  }
}
</script>

<style lang="scss" scoped>
.table-wrapper {
  padding: 16px 24px 0;
  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }
}

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

  .tr-head {
    th {
      border-top: 1px solid var(--border-color-40);
      border-bottom: 1px solid var(--border-color-40);
      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-left: 1px solid var(--border-color-40);
      }
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        border-right: 1px solid var(--border-color-40);
      }
    }
  }

  .tr-body {
    td {
      border-bottom: 1px solid var(--border-color-40);
    }
  }
}
</style>