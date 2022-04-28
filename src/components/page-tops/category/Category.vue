<template>
  <div class="header-category">
    <div class="header-category__inner">
      <div class="left-panel">
        <h1 class="title-page">{{$route.name}}</h1>
        <VTabs 
          :list="tabs" 
          :activeId="activeTabId"
          @change="emitActiveTabId" />
      </div>

      <div class="right-panel">
        <VButtonPrimary 
          :iconName="'add'" 
          :text="'Add Parking'"/>

        <VDropdownWithDots 
          class="dropdown-dots" 
          :list="dropdownList"
          hasBorder
          isClosesAfterSelection />
      </div>
    </div>
  </div>
</template>

<script>
import VTabs from "@/components/ui/tabs"
import { VButtonPrimary } from "@/components/ui/buttons"
import VDropdownWithDots from "@/components/ui/dropdowns/with-dots"
export default {
  components: {
    VTabs,
    VButtonPrimary,
    VDropdownWithDots
  },

  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    activeTabId: {
      type: Number,
      default: 0
    }
  },

  data: () => ({
    dropdownList: [
      {
        id: 1,
        name: 'Test1'
      }, {
        id: 2,
        name: 'Test2'
      }, {
        id: 3,
        name: 'Test3'
      }
    ]
  }),

  methods: {
    emitActiveTabId(id) {
      this.$emit('changeActiveTabId', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.header-category {
  padding: 32px 24px 16px 24px;
  &__inner {
    display: flex;
    justify-content: space-between;
  }
}

.left-panel {
  display: flex;
  align-items: center;
}

.title-page {
  font-size: 22px;
  line-height: 32px;
  margin-right: 18px;
  margin-top: -2px;
}

.right-panel {
  display: flex;
}
.dropdown-dots {
  margin-left: 8px;
}
</style>