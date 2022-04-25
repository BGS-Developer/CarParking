<template>
  <div class="b-contact-persons">
    <VTitleH2>Contact persons</VTitleH2>

    <VTableContact
      class="table"
      :data="data" />
  </div>
</template>

<script>
import VTitleH2 from "@/components/ui/titles/h2"
import VTableContact from "@/components/ui/tables/contact"
export default {
  components: {
    VTitleH2,
    VTableContact
  },

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    columns: {
      name: {
        name: "",
        type: "text",
      },
      position: {
        name: "",
        type: "text",
      },
      phone: {
        name: "",
        type: "text",
      },
      email: {
        name: "",
        type: "text",
      },
    }
  })
}
</script>

<style lang="scss" scoped>
.b-contact-persons {
  padding: 12px 24px;
}
.table {
  margin-top: 16px;
}
</style>