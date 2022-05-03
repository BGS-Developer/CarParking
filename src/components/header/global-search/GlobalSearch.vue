<template>
  <div class="global-search">
    <VFilter class="filter" />

    <div class="input-search-wrapper b-card">
        <input 
            class="input-search"
            v-model="value"
            placeholder="Search..."
            @change="find">
        
        <div v-show="value" class="icon-close-wrapper">
            <VIconClose 
                class="icon-close"
                @click.native="reset" />
        </div>
    </div>
  </div>
</template>

<script>
import { VIconClose } from '@/components/svg-icons'
import VFilter from "./Filter"
export default {
  components: {
    VFilter,
    VIconClose
  },

  data: () => ({
    value: ''
  }),

  methods: {
    find() {
      //TODO: add request
    },
    reset() {
      this.value = ''
      this.find()
    }
  }
}
</script>

<style lang="scss" scoped>
.global-search {
  display: flex;
  height: 32px;
}
.filter {
  position: relative;
  z-index: 1;
}
.input-search-wrapper {
  position: relative;
}
.input-search {
  outline: none;
  height: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--icons-default);
  padding: 7px 32px 7px 12px;
  border-top: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-left: 0;
  border-radius: 0 4px 4px 0;

  &::placeholder {
    color: var(--icons-default);
  }
}
.icon-close {
    cursor: pointer;
    width: 32px;
    height: 24px;
    padding: 6px;
    &-wrapper {
        display: flex;
        align-items: center;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0px;
    }
}
</style>