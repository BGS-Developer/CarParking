<template>
  <VDropdown class="dropdown" ref="dropdown">
    <template v-slot:button>
      <div :class="['dropdown__button']">
        <div class="button-text">
          {{text}}
        </div>
        <div class="button-icon">
          <VIconArrowDown  />
        </div>
      </div>
    </template>

    <template v-slot:content>
      <div class="dropdown__content b-card">
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
import { VIconArrowDown } from "@/components/svg-icons"
export default {
  components: {
    VDropdown,
    VIconArrowDown
  },

  props: {
    text: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    select(id) {
      this.$emit('change', id)
      this.close()
    },

    close() {
      this.$refs.dropdown.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  &__button {
    background-color: var(--highlight);
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-text);
    &:hover {
      background-color: var(--highlight-dm);
      .button-icon {
        border-left: 1px solid var(--highlight);
      }
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
.button {
  &-text, &-icon {
    height: 100%;
  }
  &-text {
    padding: 7px 16px;
  }
  &-icon {
    border-left: 1px solid var(--highlight-dm);
    padding: 4px 8px;
  }
}
</style>