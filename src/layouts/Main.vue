<template>
  <div :class="['main-layout', {'active': sidebarOpened}]">
    <div class="sidebar-wrapper">
      <VSidebar
        class="sidebar"
        :style="`width: ${sidebarWidth}`"
        :isActive="sidebarOpened"
        @change="toggleOpenedSidebar" />

      <VSidebarCategory
        v-if="hasSidebarCategory"
        class="sidebar"
        :style="`width: ${sidebarCategoryWidth}`"
        :list="sidebarCategoryList"
        :isActive="sidebarCategoryOpened"
        @change="toggleOpenedSidebarCategory"
        @getSearch="$emit('getCategorySearch', $event)" />
    </div>

    <div class="main-content" :style="contentWidth">
      <VHeader />

      <div class="main-content__inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import VSidebar from "@/components/sidebar"
import VSidebarCategory from "@/components/sidebar-category"
import VHeader from "@/components/header"
export default {
  components: {
    VSidebar,
    VSidebarCategory,
    VHeader
  },

  props: {
    hasSidebarCategory: Boolean,
    sidebarCategoryList: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    sidebarOpened: true,
    sidebarCategoryOpened: false
  }),

  created() {
    if (this.hasSidebarCategory) {
      this.sidebarOpened = false
      this.sidebarCategoryOpened = true
    }
  },

  methods: {
    toggleOpenedSidebar() {
      this.sidebarOpened = !this.sidebarOpened

      if (this.sidebarOpened && this.sidebarCategoryOpened) {
        this.sidebarCategoryOpened = false
      }
    },

    toggleOpenedSidebarCategory() {
      this.sidebarCategoryOpened = !this.sidebarCategoryOpened

      if (this.sidebarOpened && this.sidebarCategoryOpened) {
        this.sidebarOpened = false
      }
    }
  },

  computed: {
    sidebarWidth() {
      return this.sidebarOpened ? '256px' : '64px'
    },

    sidebarCategoryWidth() {
      return this.hasSidebarCategory
        ? this.sidebarCategoryOpened ? '236px' : '52px'
        : '0px'
    },

    contentWidth() {
      return `width: calc(100% - ${this.sidebarWidth} - ${this.sidebarCategoryWidth})`
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-layout {
    display: flex;
    &.active {
      .main-content, .sidebar {
        transition: width .6s;
      }
    }
  } 
  .main-content, .sidebar {
    transition: width .5s;
  }
  .sidebar-wrapper {
    display: flex;
  }
  .main-content {
    &__inner {
      overflow-y: auto;
      height: calc(100vh - 63px)
    }
  }
</style>>
