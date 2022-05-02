<template>
  <VDropdown class="select-rows" placement="left" placementY="bottom" ref="dropdown">
    <template v-slot:button>
      <div class="select-rows__button">
        <span class="text">{{valueLocal}}</span>

        <VIconArrowDown class="icon-arrow" />
      </div>
    </template>

    <template v-slot:content>
      <div class="select-rows__content">
        <ul class="list">
          <li v-for="item in list" :key="item" :class="['list__item', {'active': item === valueLocal}]" @click="select(item)">
            {{item}}
          </li>
        </ul>
      </div>
    </template>
  </VDropdown>
</template>

<script>
import VDropdown from "@/components/ui/dropdown"
import { VIconArrowDown } from "@/components/svg-icons"
import ROWS_COUNT_LIST from "@/constants/table-rows-count"


export default {
  components: {
    VDropdown,
    VIconArrowDown
  },

  props: {
    value: {
      type: String,
      default: ROWS_COUNT_LIST['50']
    }
  },

  methods: {
    select(value) {
      this.$emit('change', value)
      this.close()
    },

    close() {
      this.$refs.dropdown.close()
    }
  },

  computed: {
    list() {
      return Object.values(ROWS_COUNT_LIST)
    },

    valueLocal() {
      return this.list.includes(this.value)
        ? this.value
        : ROWS_COUNT_LIST['50']
    }
  }
}
</script>

<style lang="scss" scoped>
.select-rows {
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000F26;
  }
  &__content {
    min-width: 60px;
  }
}
.icon-arrow {
  margin-top: 1px;
}
.text {
  margin: 1px 6px 0 10px;
}
.list {
  padding: 4px 1px;
  text-align: center;
  &__item {
    height: 36px;
    padding: 9px 10px;
    color: #000F26;
    cursor: pointer;
    &:hover, &.active {
      background: #F6F7FB;
    }
  }
}
</style>