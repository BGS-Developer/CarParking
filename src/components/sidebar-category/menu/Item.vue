<template>
  <RouterLink :to="linkUrl" :class="['list-item']">
    <div class="list-item__inner">
      
      <div class="name truncate" >
        {{ name }}
      </div>

      <div class="description truncate">
        {{ description }}
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  components: {
    ...require('@/components/svg-icons')
  },

  props: {
    linkUrl: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  display: block;
  cursor: pointer;
  text-decoration: none;
  padding: 8px 23px;
  border-bottom: 1px solid #E1E6EC;

  .list-item__inner {
    transition: width 0.5s;
    position: relative;
    border-radius: 4px;
    height: 36px;
    overflow: hidden;
  }

  &:hover, &.router-link-active {
    background: #fff;
  }
}

.name {
  font-size: 14px;
  line-height: 18px;
  color: #000F26;
  font-weight: 400;
  white-space: nowrap;
  text-align: left;
}
.description {
  text-align: left;
  font-size: 12px;
  line-height: 14px;
  color: #8193AE;
}
</style>