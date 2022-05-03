<template>
  <RouterLink :to="urlHomePage" class="logo">
    <img src="@/assets/logo.png" alt="logo site">
    <span v-show="isShowText" class="logo__text" >
      {{ text }}
    </span>
  </RouterLink>
</template>

<script>
import routePaths from "@/constants/router-paths"
export default {
  props: {
    text: {
      type: String,
      default: 'CarParking'
    },
    isShowText: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    urlHomePage() {
      return routePaths.home
    }
  }
}
</script>

<style lang="scss" scoped>
  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    &__text {
      margin-left: 14px;
      color: var(--white-bg);
      font-family: 'Product Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 40px;
    }
  }
</style>