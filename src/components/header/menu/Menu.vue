<template>
  <div class="menu">
    <VIconWrapper>
      <VIconCheck /> 
    </VIconWrapper>

    <VIconWrapper @click.native="openNotifications">
      <VIconBell /> 
    </VIconWrapper>

    <VIconWrapper>
      <VIconSettingsFill /> 
    </VIconWrapper>

    <VIconWrapper>
      <VIconQuestion /> 
    </VIconWrapper>
  </div>
</template>

<script>
import VIconWrapper from "@/components/ui/icon-wrapper"
import { VIconCheck, VIconBell, VIconSettingsFill, VIconQuestion } from "@/components/svg-icons"
export default {
  components: {
    VIconWrapper,
    VIconCheck,
    VIconBell,
    VIconSettingsFill,
    VIconQuestion
  },

  methods: {
    openNotifications() {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
}
</style>