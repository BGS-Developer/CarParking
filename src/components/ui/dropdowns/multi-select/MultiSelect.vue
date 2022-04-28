<template>
  <VDropdown class="dropdown-dots" ref="dropdown" @toggle="overwriteLocalList">
    <template v-slot:button>
      <div :class="['dropdown-dots__button', {'border b-card': hasBorder}]">
        <slot />
      </div>
    </template>

    <template v-slot:content>
      <div class="dropdown-dots__content b-card">
        <div v-if="listTitle.length" class="content-top">
          <div class="list-title">
            {{ listTitle }}
          </div>
        </div>

        <div class="content-list">
          <ul class="list">
            <li v-for="item in localList" :key="item.id" class="list__item">
              <VCheckbox 
                :name="item.name" 
                :value.sync="item.isActive" />
            </li>
          </ul>
        </div>

        <div class="content-bottom">
          <VButtonWithoutBg
            class="button-reset"
            :text="'Reset'"
            @click.native="reset" />

          <VButtonPrimary
            class="button-apply"
            :text="'Apply'"
            @click.native="apply" />
        </div>
      </div>
    </template>
  </VDropdown>
</template>

<script>
import VDropdown from "@/components/ui/dropdown"
import VCheckbox from "@/components/ui/form/checkbox"
import VButtonWithoutBg from "@/components/ui/buttons/without-bg"
import VButtonPrimary from "@/components/ui/buttons/primary"
export default {
  components: {
    VDropdown,
    VCheckbox,
    VButtonWithoutBg,
    VButtonPrimary
  },

  props: {
    listTitle: {
      type: String,
      default: ''
    },

    list: {
      type: Array,
      default: () => []
    },
    hasBorder: Boolean
  },

  data: () => ({
    localList: []
  }),

  methods: {

    close() {
      this.overwriteLocalList()
      this.$refs.dropdown.close()
    },

    reset() {
      this.localList.forEach(item => {
        item.isActive = false
      })
    },

    apply() {
      this.overwriteList()
      this.$emit('change')
      this.close()
    },

    overwriteLocalList() {
      // This SetTimeout is need because dropdown have animation
      setTimeout(() => {
        this.localList.forEach((item, i) => {
          item.isActive = this.list[i].isActive
        })
      }, 200)
    },

    overwriteList() {
      this.list.forEach((item, i) => {
        item.isActive = this.localList[i].isActive
      })
    }
  },

  watch: {
    list: {
      immediate: true,
      handler() {
        this.localList = []

        this.list.forEach(item => {
          this.localList.push({
            ...item
          })
        })
      }
    }
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
    width: 320px;
  } 
}
.content-top {
  height: 56px;
  padding: 24px 16px 12px;
  border-bottom: 1px solid var(--border-color-40);
}

.list-title {
  color: var(--primary-text);
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
}

.list {
  overflow-y: auto;
  max-height: 236px;

  &__item {
    padding: 0 10px;

    & > * {
      color: #000F26;
      cursor: pointer;
      padding: 11px 12px;
      height: 40px;
      border-radius: 4px;

      &:hover {
        background: #F6F7FB;
      }
    }
  }
}

.content-list {
  padding: 12px 5px;
}

.content-bottom {
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-color-40);
}
.button-reset {
  padding-left: 0;
  padding-right: 4px;
  font-size: 13px;
  line-height: 15px;
  &:hover {
    color: var(--primary-text);
  }
}
.button-apply {
  width: auto;
}
</style>