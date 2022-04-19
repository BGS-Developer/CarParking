<template>
  <VDropdown>
    <template v-slot:button>
      <div>
        <VAvatar />
      </div>
    </template>

    <template v-slot:content>
      <div class="test">

      </div>
    </template>
  </VDropdown>
</template>

<script>
import VDropdown from "@/components/ui/dropdown"
import VAvatar from "@/components/ui/avatar"
export default {
  components: {
    VDropdown,
    VAvatar
  }
}
</script>

<style lang="scss" scoped>
.test {
  width: 100px;
  height: 100px;
}
</style>