<template>
  <VDropdown class="dropdown-dots" ref="dropdown">
    <template v-slot:button>
      <div :class="['dropdown-dots__button', {'border b-card': hasBorder}]">
        <VIconDots class="icon-dots" />
      </div>
    </template>

    <template v-slot:content>
      <div class="dropdown-dots__content b-card">
        <ul class="list">
          <li v-for="item in list" :key="item.id" class="list__item" @click="select(item.id)">
            {{item.name}}
          </li>
        </ul>
      </div>
    </template>
  </VDropdown>
</template>

<script>
import VDropdown from "@/components/ui/dropdown"
import { VIconDots } from "@/components/svg-icons"
export default {
  components: {
    VDropdown,
    VIconDots
  },

  props: {
    list: {
      type: Array,
      default: () => []
    },
    hasBorder: Boolean,
    isClosesAfterSelection: Boolean
  },

  methods: {
    select(id) {
      this.$emit('change', id)
      
      if (this.isClosesAfterSelection) {
        this.close()
      }
    },

    close() {
      this.$refs.dropdown.close()
    }
  },

  computed: {
    
  }
}
</script>

<style lang="scss" scoped>
.dropdown-dots {
  &__button {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.border {
      border: 1px solid var(--border-color);
    } 
  }
  &__content {
    width: 154px;
  }
}
.list {
  padding: 4px 1px;
  &__item {
    height: 36px;
    padding: 9px 10px;
    color: #000F26;
    cursor: pointer;
    &:hover {
      background: #F6F7FB;
    }
  }
}
</style>