<template>
  <VCellLayout class="cell-link">
    <RouterLink v-if="isLocalUrl" :to="url">
      {{ value }}
    </RouterLink>
  
    <a v-else :href="url" target="_blank" rel="noopener noreferrer">
      {{ value }}
    </a>
  </VCellLayout>
</template>

<script>
import mixin from "./_mixin"
export default {
  mixins: [mixin],

  props: {
    url: {
      type: [String, Number],
      default: ''
    },
    isLocalUrl: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.cell-link {
  a {
    color: var(--link-text);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>