<template>
  <div :class="['sidebar', {'active': isActive}]">
    <div class="sidebar__header">
      <VLogo :isShowText="isActive" />

      <div class="button-close-sidebar" 
        v-show="isActive" 
        @click="toggleIsActive">
        
        <VIconMenu />
      </div>
    </div>

    <div class="sidebar__menu">
      <div class="button-open-sidebar" 
        v-show="!isActive" 
        @click="toggleIsActive">

        <VIconMenu />
      </div>

      <div class="button-add-wrapper">
        <VButtonAdd :isBig="isActive" />
      </div>

      <VMenu :list="menu" :isActive="isActive" />
    </div>
  </div>
</template>

<script>
// import routePaths from "@/router/paths"
import { mapGetters } from "vuex"
import VLogo from "@/components/logo"
import { VIconMenu } from "@/components/svg-icons"
import VButtonAdd from "./ButtonAdd"
import VMenu from "./menu"
export default {
  components: {
    VLogo,
    VIconMenu,
    VButtonAdd,
    VMenu,
  },

  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    toggleIsActive() {
      this.$emit('update:isActive', !this.isActive)
    }
  },

  computed: {
    ...mapGetters({
      menu: 'Menu/convertedList'
    })
  }
}
</script>

<style lang="scss" scoped>
  .sidebar {
    height: 100vh;
    background: #051C3F;
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px;
      border-bottom: 1px solid #E1E6EC20;
      height: 63px;
      overflow: hidden;
    }
    &.active {
      .sidebar__header {
        padding: 14px 10px 14px 16px;
      }
      .button-add-wrapper {
        padding: 8px 16px;
      }
    }
  }
  .button-add-wrapper {
    padding: 8px 12px;
  }
  .button-open-sidebar, .button-close-sidebar {
    cursor: pointer;
    color: #8193AE;
    &:hover {
      color: #c5cfdf; 
    }
  }
  .button-open-sidebar {
    padding: 10px;
    margin-top: 8px;
    
    svg {
      transform: rotate(180deg);
    }
  }
  .button-close-sidebar {
    padding: 6px;
  }
</style>
