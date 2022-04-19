<template>
  <div class="global-search">
    <VFilter />

    <VSearch />
  </div>
</template>

<script>
import VFilter from "./Filter"
import VSearch from "@/components/ui/search"
export default {
  components: {
    VFilter,
    VSearch
  }
}
</script>

<style lang="scss" scoped>
.global-search {
  width: 270px;
  height: 32px;
  border: 1px solid gray;
  border-radius: 4px;
}
</style>