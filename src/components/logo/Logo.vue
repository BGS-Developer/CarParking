<template>
  <div class="b-logo dfghfh">
    <img src="@/assets/logo.png" alt="logo site">
    <span v-show="isShowText" class="b-logo__text" >
      {{ text }}
    </span>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss" scoped>
  .b-logo {
    display: flex;
    align-items: center;
    &__text {
      margin-left: 14px;
      color: #fff;
      font-family: 'Product Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 40px;
    }
  }
</style>