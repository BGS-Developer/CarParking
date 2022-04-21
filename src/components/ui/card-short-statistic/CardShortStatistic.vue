<template>
  <div class="b-card card-short-statistic">
    <div>
      <div class="name">
        <VSmallCircle :status="status" />
        {{name}}
      </div>

      <div class="value">
        {{formatedValue}}
      </div>
    </div>

    <div v-if="totalValue" class="percent">
      {{percent}}%
    </div>

    <div v-if="hasEdit" class="icon-edit">
      <VIconEdit @click="edit" />
    </div>
  </div>
</template>

<script>
import formatAmount from "@/helpers/formatAmount"
import { VIconEdit } from "@/components/svg-icons"
import VSmallCircle from "@/components/ui/small-circle"
export default {
  components: {
    VIconEdit,
    VSmallCircle
  },

  props: {
    status: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    },
    totalValue: {
      type: Number,
      default: 0
    },
    formatCurrency: {
      type: String,
      validator: (value) => ['USD', 'EUR', 'CNY', ''].includes(value),
      default: ''
    },
    formatDigits: {
      type: Number,
      default: 0
    },
    hasEdit: Boolean,
    hasPercent: Boolean
  },

  methods: {
    edit() {
      this.$emit('edit')
    }
  },

  computed: {
    percent() {
      return (this.value / this.totalValue).toFixed(3) * 100
    },
    formatedValue() {
      return formatAmount(this.value, this.formatCurrency, this.formatDigits, this.formatCurrency ? 'currency' : 'decimal')
    }
  }
}
</script>

<style lang="scss" scoped>
.card-short-statistic {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
}
.name {
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  color: #8193AE;
  margin-bottom: 4px;
}
.value {
  color: #000F26;
  font-size: 22px;
  line-height: 20px;
}
.percent {
  width: 56px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  letter-spacing: 0.02em;
  color: #B5C0D0;
}
.circle {
  margin-right: 8px;
}
.icon-edit {
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 8px;
  cursor: pointer;
  svg {
    width: 16;
    height: 16;
    color: #8193AE;
  }
  &:hover {
    svg {
      color: #8193AE80;
    }
  }
}
</style>