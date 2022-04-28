<template>
  <RouterLink class="button-back-page b-card" :to="url">
    <VIconArrow />
  </RouterLink>
</template>

<script>
import { VIconArrow } from "@/components/svg-icons"
export default {
  components: {
    VIconArrow
  },

  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.button-back-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  color: #051C3F;
  cursor: pointer;
  &:hover {
    color: #051C3F90;
  }
}
</style>