<template>
  <VDropdown class="filter-search" placement="left">
    <template v-slot:button>
      <div class="filter-search__button">
        <VIconSearch class="icon-search" />

        <span class="text">All</span>

        <VIconArrowDown class="icon-arrow" />
      </div>
    </template>

    <template v-slot:content>
      <div class="filter-search__content">

      </div>
    </template>
  </VDropdown>
</template>

<script>
import VDropdown from "@/components/ui/dropdown"
import { VIconSearch, VIconArrowDown } from "@/components/svg-icons"
export default {
  components: {
    VDropdown,
    VIconSearch,
    VIconArrowDown
  },

  computed: {
    
  }
}
</script>

<style lang="scss" scoped>
.filter-search {
  width: 88px;
  padding: 5.5px 10px;
  background: #F6F7FB;
  border: 1px solid #B5C0D0;
  border-radius: 4px 0px 0px 4px;
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000F26;
  }
  &__content {
    padding: 18px;
    width: 278px;
  }
}
.icon-search {
  width: 14px;
  height: 14px;
}
.icon-arrow {
  margin-top: 2px;
}
.text {
  margin: 1px 6px 0 10px;
}
</style>