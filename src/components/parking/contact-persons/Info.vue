<template>
  <div class="b-info">
    <VTitleH2>Info</VTitleH2>

    <VContentDescription :title="'Description'">
      A visually pleasing design generally uses no more than 3 different sizes. Having a range of differently sized elements will not only create variety within your layout, but it will also establish a visual hierarchy (see next principle) on the page. 
    </VContentDescription>

    <VContentFeatures :title="'Location features'" />

    <VContentDescription :title="'Instructions'"> 
      Watch out for different rules and restrictions when there's big sporting events, festivals like Glastonbury or a big concert. It could mean parking is only allowed for residents during the event or over a weekend. In some cases, parking could even be completely suspended for everyone.
      In the weeks leading up to an event that’s expected to cause disruption, the local councils should usually have signs up explaining what’s going to change.
    </VContentDescription>

    <VContentList :title="'Restrictions'" />
  </div>
</template>

<script>
import VTitleH2 from "@/components/ui/titles/h2"
import VContentDescription from "@/components/ui/contents/description"
import VContentFeatures from "@/components/ui/contents/features"
import VContentList from "@/components/ui/contents/list"
export default {
  components: {
    VTitleH2,
    VContentDescription,
    VContentFeatures,
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