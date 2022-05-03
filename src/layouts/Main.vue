<template>
  <div :class="['main-layout', {'active': sidebarOpened}]">
    <div class="sidebar-wrapper">
      <VSidebar
        class="sidebar"
        :style="`width: ${sidebarWidth}`"
        :isActive="sidebarOpened"
        @change="toggleOpenedSidebar" />

      <transition name="set-width" mode="out-in">
        <VSidebarCategory
          v-if="hasSidebarCategory"
          class="sidebar"
          :style="`width: ${sidebarCategoryWidth}`"
          :category="category"
          :isActive="sidebarCategoryOpened"
          @change="toggleOpenedSidebarCategory"
          @getSearch="$emit('getCategorySearch', $event)" />
        </transition>
    </div>

    <div class="main-content">
      <VHeader />

      <div class="main-content__inner" >
        <div ref="main-content-inner">
          <slot />
        </div>
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
      return this.sidebarOpened ? '256px' : '68px'
    },

    sidebarCategoryWidth() {
      return this.hasSidebarCategory
        ? this.sidebarCategoryOpened ? '240px' : '52px'
        : '0px'
    },

    category() {
      return this.$route.meta.category
    },

    hasSidebarCategory() {
      return this.category && this.category.hasSidebar
    }
  },

  watch: {
    '$route.path': {
      handler() {
        this.$scrollToTop(this.$refs['main-content-inner'])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .set-width-enter-active, .set-width-leave-active {
    transition: width .3s !important;
  }
  .set-width-enter, .set-width-leave-to {
    width: 0 !important;
  }
  .main-layout {
    display: flex;
  } 
  .main-content, .sidebar {
    transition: width .5s;
  }
  .sidebar-wrapper {
    display: flex;
  }
  .main-content {
    width: 100%;
    &__inner {
      position: relative;
      overflow-y: hidden;
      height: calc(100vh - 63px);

      & > div {
        overflow-y: auto;
        height: inherit;
      }
    }
  }
</style>
