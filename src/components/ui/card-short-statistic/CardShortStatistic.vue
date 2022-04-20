<template>
  <div class="b-card card-short-statistic">
    <div>
      <div class="name">
        <div v-if="status" :class="[`circle circle-${status}`]"></div>
        {{name}}
      </div>

      <div class="value">
        {{formatedValue}}
      </div>
    </div>

    <div v-if="totalValue" class="percent">
      {{percent}}%
    </div>
  </div>
</template>

<script>
import formatAmount from "@/helpers/formatAmount"
export default {
  props: {
    status: {
      type: String,
      validator: (value) => ['success', 'pending', 'failure', ''].includes(value)
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
    hasPercent: Boolean
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
</style>