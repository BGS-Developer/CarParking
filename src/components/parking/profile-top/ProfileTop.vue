<template>
  <VProfileTop 
    :imageSrc="data.imageSrc"
    :title="data.name"
    :tabs="tabs.list"
    :activeTabId="tabs.activeId"
    @changeActiveTabId="setActiveTabId">

    <template v-slot:description>
      <div>
        <VIconLocation class="icon-location" /> 
        <span>{{data.address}}</span>
      </div>
      <VStarRate :value="5" />
      <VButtonStatus :status="'available'" />
    </template>

    <template v-slot:actions>
      <VButtonSelect 
        :text="'Add'"
        :list="actionsList" />

      <VActionsGroup>
        <VButtonWithoutBg
          :text="'Tasks'"
          :value="5" />

        <VButtonWithoutBg
          :text="'Edit'" />

        <VDropdownWithDots 
          class="dropdown-dots" 
          :list="moreList"
          isClosesAfterSelection />
      </VActionsGroup>
    </template>
  </VProfileTop>
</template>

<script>
import VProfileTop from "@/components/page-tops/single"
import VStarRate from "@/components/ui/star-rate"
import VButtonStatus from "@/components/ui/buttons/status"
import { VIconLocation } from "@/components/svg-icons"
import VButtonSelect from "@/components/ui/buttons/select"
import VActionsGroup from "@/components/ui/actions-group"
import VDropdownWithDots from "@/components/ui/dropdowns/with-dots"
import VButtonWithoutBg from "@/components/ui/buttons/without-bg"
export default {
  components: {
    VProfileTop,
    VStarRate,
    VButtonStatus,
    VIconLocation,
    VButtonSelect,
    VActionsGroup,
    VDropdownWithDots,
    VButtonWithoutBg
  },

  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    tabs: {
      type: Object,
      default: () => ({})
    }
  },

  data: () => ({
    moreList: [
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
    ],

    actionsList: [
      {
        id: 1,
        name: "File",
      }, {
        id: 2,
        name: "Customer",
      }, {
        id: 3,
        name: "Booking",
      }, {
        id: 4,
        name: "Payment",
      }, {
        id: 5,
        name: "Parking space",
      }, 
    ],
  }),

  methods: {
    setActiveTabId(id) {
      this.tabs.activeId = id
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-location {
  color: var(--icons-actions);
  margin-right: 4px;
}
</style>