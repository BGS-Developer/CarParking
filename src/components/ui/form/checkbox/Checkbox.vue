<template>
  <div :class="['input-checkbox-wrapper', {'empty-name': !name.length}]" @click.stop.prevent="toggle">
    <label class="input-checkbox" >
      <input type="checkbox" :value="value" :checked="value">
      <span>{{ name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  components: {
  },

  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },

  methods: {
    toggle() {
      this.$emit('update:value', !this.value)
      this.$emit('change', !this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-checkbox-wrapper {
  &.empty-name {
    display: flex;
    justify-content: center;
    align-items: center;

    .input-checkbox {
      width: 16px;
    }
  }
}

.input-checkbox {
  cursor: pointer;
  width: 100%;
  & > input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  & > span {
    display: inline-flex;
    align-items: center;
    user-select: none;
    color: var(--primary-text)
  }
}

.input-checkbox>span::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 56% 56%;
}

.input-checkbox>input:not(:disabled):not(:checked)+span:hover::before {
  border-color: var(--highlight);
}

.input-checkbox>input:not(:disabled):active+span::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}

.input-checkbox>input:focus+span::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.input-checkbox>input:focus:not(:checked)+span::before {
  border-color: #80bdff;
}

.input-checkbox>input:checked+span::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.input-checkbox>input:disabled+span::before {
  background-color: #e9ecef;
}
</style>