<template>
  <div class="header">
    <VGlobalSearch class="search" />

    <div class="panel-right">
      <VMenu />
      <VProfile class="profile" />
    </div>
  </div>
</template>

<script>
import VGlobalSearch from "./global-search"
import VMenu from "./menu"
import VProfile from "./profile"
export default {
  components: {
    VGlobalSearch,
    VMenu,
    VProfile
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 63px;
  background-color: #fff;
  box-shadow: inset 0px -1px 0px #E1E6EC;
  padding: 16px 24px;
}
.panel-right {
  display: flex;
}
.profile {
  margin-left: 12px;
}
</style>