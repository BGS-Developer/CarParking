<template>
  <div class="table-wrapper">
    <div class="table-wrapper__top">
      <VFilters
        :filters="filters"
        :columns="columns"
        @change="changeFilters" />

      <VActions 
        :actions="actions"
        :columns="columns"
        @download="download"
        @print="print"
        @customise="customise" />
    </div>
    
    <div 
      class="table-wrapper__content"
      :style="`height: calc(100vh - ${indent})`">

      <div class="content-inner">
        <table class="table">
          <tr class="tr-head">
            <VCellHeadCheckbox 
              :value="isSelectedAllRows"
              @change="toggleRowsIsSelected" />

            <component
              v-for="column in columns" 
              :key="column.id" 
              v-show="column.isActive"
              :is="`v-cell-head-${column.type}`"
              :value="column.name" />

            <VCellHeadText />
          </tr>

          <VLayoutRow 
            class="tr-body"
            v-for="row in dateTable" 
            :key="row.id"
            isClickable
            @click.native="selectItem(row)" >

            <VCellBodyCheckbox 
              class="cell-checkbox"
              :value="row.isSelected"
              @change="toggleRowIsSelected(row.id)" />

            <component
              v-for="column in columns" 
              :key="column.id" 
              v-show="column.isActive"
              :is="`v-cell-body-${column.type}`"
              :value="row[column.fieldName]"
              :url="row[column.fieldUrl]"
              @sendEmail="emitSendEmail(row)" />

            <VCellActions />
          </VLayoutRow>
        </table>
      </div>

      <VPreloader v-show="!isLoaded" isFixed />
    </div>

    <VPagination class="table-wrapper__bottom"
      :filters="filters"
      @change="changeFilters" />
  </div>
</template>

<script>
import VLayoutRow from "./../LayoutRow"
import VCellActions from "@/components/ui/tables/_cells/body/Actions"
import VPagination from "@/components/ui/pagination"
import VPreloader from "@/components/ui/preloader"
export default {
  components: {
    VLayoutRow,
    VCellActions,
    VPagination,
    VPreloader,

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
    },
    indent: {
      type: String,
      default: '0'
    },
    isLoaded: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    selectedRowsIds: []
  }),

  methods: {
    changeFilters() {
      this.$emit('changeFilters')
    },

    selectItem() {
      /* if (this.isClickable) {
        this.$emit('selectItem', item)  
      } */
    },

    toggleRowsIsSelected() {
      if (this.isSelectedAllRows) {
        this.selectedRowsIds = []
      }
      else {
        this.selectedRowsIds = []
        this.data.forEach(item => {
          this.selectedRowsIds.push(item.id)
        })
      }
    },

    toggleRowIsSelected(id) {
      const index = this.selectedRowsIds.indexOf(id)

      if (index >= 0) {
        this.selectedRowsIds.splice(index, 1)        
      }
      else {
        this.selectedRowsIds.push(id)
      }
    },

    emitSelectedRows() {
      this.$emit('changeSelectedRows', this.selectedRowsIds)
    },
    
    download() {

    },
    print() {

    },
    customise() {

    }
  },

  computed: {
    dateTable() {
      return this.data.map(item => ({
        ...item,
        isSelected: this.selectedRowsIds.includes(item.id)
      }))
    },

    isSelectedAllRows() {
      return this.selectedRowsIds.length === this.data.length
    }
  }
}
</script>

<style lang="scss" scoped>
.table-wrapper {

  &__top {
    padding: 16px 24px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  } 
  
  &__content {
    padding: 0 24px 4px;
    overflow-y: hidden;
    position: relative;

    .content-inner {
      overflow-y: auto;
      height: inherit;
    }
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

.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  .tr-head {
    position: sticky;
    top: 0;
    z-index: 1;

    th {
      background-color: #fff;
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

    ::v-deep {
      .input-checkbox {
        opacity: 0;
        transition: opacity 0.3s;
      }
    }

    &:hover {
      ::v-deep {
        .input-checkbox {
          opacity: 1;
        }
      }
    }
  }
}
</style>