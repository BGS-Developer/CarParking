<template>
  <div class="button-add">
    <VIconAdd />

    <transition name="fade-sidebar-button-add">
      <span v-if="isBig" class="text truncate">
        Add New
      </span>
    </transition>
  </div>
</template>

<script>
import { VIconAdd } from "@/components/svg-icons"
export default {
  components: {
    VIconAdd
  },

  props: {
    isBig: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.button-add {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding: 12px 16px;
  background: var(--highlight);
  box-shadow: 0px 2px 4px rgba(5, 28, 63, 0.1);
  border-radius: 4px;

  color: var(--white-bg);
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  &:hover {
    background: var(--highlight-dm);
  }
  svg {
    min-width: 16px;
  }
}
.text {
  margin-left: 8px;
  white-space: nowrap;
}

.fade-sidebar-button-add-enter-active {
  transition: .5s;
}
.fade-sidebar-button-add-enter, .fade-sidebar-button-add-leave-to {
  opacity: 0;
}
</style>