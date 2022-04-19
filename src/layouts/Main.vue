<template>
  <div class="main-layout">
    <VSidebar 
      class="sidebar"
      :isActive.sync="sidebarOpened"
      :style="`width: ${sidebarWidth}`" />

    <div class="main-content" :style="`width: calc(100% - ${sidebarWidth})`">
      <VHeader />
    </div>
  </div>
</template>

<script>
import VSidebar from "@/components/sidebar"
import VHeader from "@/components/header"
export default {
  components: {
    VSidebar,
    VHeader
  },

  data: () => ({
    sidebarOpened: true
  }),

  computed: {
    sidebarWidth() {
      return this.sidebarOpened ? '256px' : '64px'
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-layout {
    display: flex;
  } 
  .main-content, .sidebar {
    transition: width .6s;
  }
</style>>
