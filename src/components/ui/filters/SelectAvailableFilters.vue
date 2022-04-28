<template>
  <VDropdown class="filter-available" placement="left">
    <template v-slot:button>
      <div class="filter-available__button">
        <span class="text">Filters</span>

        <VIconBar class="icon-bar" />
      </div>
    </template>

    <template v-slot:content>
      <div class="filter-available__content">

      </div>
    </template>
  </VDropdown>
</template>

<script>
import VDropdown from "@/components/ui/dropdown"
import { VIconBar } from "@/components/svg-icons"
export default {
  components: {
    VDropdown,
    VIconBar
  },

  props: {

  },

  computed: {
    
  }
}
</script>

<style lang="scss" scoped>
.filter-available {
  width: 140px;
  height: 32px;
  padding: 7px 12px;
  background: var(--bg-color);
  border-radius: 4px 0px 0px 4px;
  &__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000F26;
  }
  &__content {
    padding: 18px;
    width: 278px;
  }
}
.icon-bar {
  width: 16px;
  height: 16px;
  margin-top: 1px;
}
.text {
  margin-top: 1px;
}
</style>