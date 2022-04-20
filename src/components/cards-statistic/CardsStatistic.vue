<template>
  <div class="cards-statistic">
    <div class="cards-statistic__inner">
      <div class="card-statistic" v-for="item in list" :key="item.id">
        <VCardShortStatistic v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script>
import VCardShortStatistic from "@/components/ui/card-short-statistic"
export default {
  components: {
    VCardShortStatistic
  },

  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.cards-statistic {
  padding: 20px 24px;
  background: #F1F2F9;
  &__inner {
    display: flex;
    flex-wrap: wrap;
  }
}
.card-statistic {
  width: calc(100% / 4);
  padding: 4px;

  @media (max-width: 1200px) {
    width: calc(100% / 2);
  }
}
</style>