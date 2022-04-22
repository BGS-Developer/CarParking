<template>
  <VLayout :title="title">
    <div class="description-wrapper">
      <ul>
        <slot />
      </ul>
    </div>
  </VLayout>
</template>

<script>
import mixin from "./../mixin"
export default {
  mixins: [mixin],
}
</script>

<style lang="scss" scoped>
.description-wrapper {
  padding: 12px 12px 25px 12px;
  color: #000F26;
  border: 1px solid #B5C0D0;
  border-radius: 4px;
}
ul {
  list-style-type: disc;
  padding-left: 24px;
}
</style>