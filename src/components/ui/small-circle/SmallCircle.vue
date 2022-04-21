<template>
  <div v-if="status" :class="[`circle circle-${status}`]"></div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      validator: (value) => ['default', 'success', 'pending', 'failure', ''].includes(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  &-default {
    background-color: #7B61FF;
  }
  &-success {
    background-color: #22C18F;
  }
  &-pending {
    background-color: #FBB851;
  }
  &-failure {
    background-color: #EC424C;
  }
}
</style>