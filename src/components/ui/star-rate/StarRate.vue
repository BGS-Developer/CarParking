<template>
  <div class="star-rate">
    <VIconStar class="icon"/>
    <span class="value">{{formatedValue}}</span>
  </div>
</template>

<script>
import { VIconStar } from "@/components/svg-icons"
export default {
  components: {
    VIconStar
  },

  props: {
    value: {
      type: Number,
      default: 0
    }
  },

  computed: {
    formatedValue() {
      return this.value.toFixed(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.star-rate {
  display: flex;
  align-items: center;
}
.icon {
  color: var(--ratings);
}
.value {
  margin-left: 4px;
  color: var(--primary-text);
}
</style>