<template>
  <div :class="['sidebar', {'active': isActive}]">
    <div class="sidebar__header">
      <div class="wrapper">
        <VButtonBackPage :url="categoryUrl" />

        <div class="category-name">
          <span>{{ categoryName }}</span>
        </div>
      </div>

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

      <template v-if="isActive">
        <div class="search-wrapper">
          <VSearch 
            :value.sync="search"
            @change="$emit('getSearch', search)"  />
        </div>

        <VMenu 
          :list="list" 
          :isActive="isActive" />
      </template>
    </div>
  </div>
</template>

<script>
import { VIconMenu } from "@/components/svg-icons"
import VButtonBackPage from "@/components/button-back-page"
import VSearch from "@/components/ui/search"
import VMenu from "./menu"
export default {
  components: {
    VIconMenu,
    VButtonBackPage,
    VSearch,
    VMenu
  },

  props: {
    list: {
      type: Array,
      default: () => []
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    search: '',
  }),

  methods: {
    toggleIsActive() {
      this.$emit('change', !this.isActive)
    }
  },

  computed: {
    categoryName() {
      return this.$route.meta && this.$route.meta.categoryName
    },
    categoryUrl() {
      return this.$route.meta && this.$route.meta.categoryUrl
    }
  }
}
</script>

<style lang="scss" scoped>
  .sidebar {
    width: 236px;
    background: #F1F2F9;
    border-right: 1px solid #E1E6EC;
    height: 100vh;
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 11px;
      border-bottom: 1px solid #e1e6ec;
      height: 63px;
      overflow: hidden;
      .wrapper {
        display: flex;
        align-items: center;
      }
    }
    &.active {
      .sidebar__header {
        padding: 14px 10px 14px 16px;
      }
    }
  }
  .button-open-sidebar, .button-close-sidebar {
    cursor: pointer;
    color: #8193AE;
    display: flex;
    justify-content: center;
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
  .category-name {
    margin-left: 9px;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #051C3F;
  }
  .search-wrapper {
    padding: 12px 16px;
  }
</style>
