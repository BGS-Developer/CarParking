<template>
  <div class="b-info">
    <VHeader2>Info</VHeader2>

    <VContentDescription :title="'Description'">
      A visually pleasing design generally uses no more than 3 different sizes. Having a range of differently sized elements will not only create variety within your layout, but it will also establish a visual hierarchy (see next principle) on the page. 
    </VContentDescription>

    <VContentDescription :title="'Location features'">
      <VContentIconsWrapper>
        <VContentIconWrapper>
          <VIconShower />
        </VContentIconWrapper>

        <VContentIconWrapper>
          <VIconBed />
        </VContentIconWrapper>

        <VContentIconWrapper>
          <VIconRoundClock />
        </VContentIconWrapper>

        <VContentIconWrapper>
          <VIconEat />
        </VContentIconWrapper>

        <VContentIconWrapper>
          <VIconLamp />
        </VContentIconWrapper>
      </VContentIconsWrapper>
    </VContentDescription>


    <VContentDescription :title="'Instructions'"> 
      Watch out for different rules and restrictions when there's big sporting events, festivals like Glastonbury or a big concert. It could mean parking is only allowed for residents during the event or over a weekend. In some cases, parking could even be completely suspended for everyone.
      In the weeks leading up to an event that’s expected to cause disruption, the local councils should usually have signs up explaining what’s going to change.
    </VContentDescription>

    <VContentList :title="'Restrictions'">
      <li>No taller than 3 feet</li>
      <li>When it comes to double yellow lines, the best bet is to assume that you can’t park there at any time.</li>
      <li>The restrictions usually kick in around 6:30pm to midnight and from midnight to 8am, 7 days a week.</li>
      <li>From 1 months or more</li>
      <li>No taller than 3 feet</li>
    </VContentList>
  </div>
</template>

<script>
import VHeader2 from "@/components/ui/headers/h2"
import VContentIconsWrapper from "@/components/ui/contents/_elements/icons-wrapper"
import VContentIconWrapper from "@/components/ui/contents/_elements/icon-wrapper"
import { VIconShower, VIconBed, VIconRoundClock, VIconEat, VIconLamp } from "@/components/svg-icons"
import VContentDescription from "@/components/ui/contents/description"
import VContentList from "@/components/ui/contents/list"
export default {
  components: {
    VHeader2,
    VContentIconsWrapper,
    VContentIconWrapper,
    VIconShower,
    VIconBed,
    VIconRoundClock,
    VIconEat,
    VIconLamp,
    VContentDescription,
    VContentList
  },

  data: () => ({

  })
}
</script>

<style lang="scss" scoped>
.b-info {
  padding: 12px 24px;
}
</style>