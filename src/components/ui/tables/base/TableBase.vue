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
    
    <div class="table">
      <pre>
        {{columns}}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    VFilters: () => import("@/components/ui/filters"),
    VActions: () => import("@/components/ui/actions")
  },

  props: {
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
</style>