<template>
  <div class="page-top">
    <div class="page-top__inner">
      <div class="main-info">
        <VImage 
          class="image-wrapper"
          :src="imageSrc" 
          :alt="title"
          hasRounded />

        <div>
          <VTitleH1>
            {{title}}
          </VTitleH1>
        </div>
      </div>

      <div class="actions">

      </div>
    </div>
    <VTabsMenu class="tabs-menu" 
      :list="tabs"
      :activeId="activeTabId"
      @change="emitActiveTabId" />
  </div>
</template>

<script>
import VImage from "@/components/ui/image"
import VTitleH1 from "@/components/ui/titles/h1"
import VTabsMenu from "@/components/ui/tabs-menu"
export default {
  components: {
    VImage,
    VTitleH1,
    VTabsMenu
  },

  props: {
    imageSrc: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    tabs: {
      type: Array,
      default: () => []
    },
    activeTabId: {
      type: Number,
      default: 0
    }
  },

  methods: {
    emitActiveTabId(id) {
      this.$emit('changeActiveTabId', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-top {
  padding: 32px 37px 0 37px;
  &__inner {
    padding-bottom: 24px;
  }
}
.tabs-menu {

}

.main-info {
  display: flex;
}
.image-wrapper {
  width: 80px;
  height: 80px;
  margin-right: 16px;
}
</style>