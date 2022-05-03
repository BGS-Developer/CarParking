<template>
  <div class="contact-persons">
    <VTableContact
      :title="'Сontact persons'"
      :data="data"
      :columns="columns"
      :textButtonAdd="'Add person'"
      @add="addPerson"
      @sendEmail="sendEmail"/>
  </div>
</template>

<script>
import VTableContact from "@/components/ui/tables/contact"
export default {
  components: {
    VTableContact
  },

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    columns: [
      {
        id: 1,
        name: 'Name',
        fieldName: "name",
        type: "name",
      },
      {
        id: 2,
        name: 'Position',
        fieldName: "position",
        type: "position",
      },
      {
        id: 3,
        name: 'Phone',
        fieldName: "phone",
        type: "phone",
      },
      {
        id: 4,
        name: 'Email',
        fieldName: "email",
        type: "email",
      }
    ]
  }),

  methods: {
    addPerson() {
      alert('Open modal')
    },
    sendEmail(item) {
      alert(`Letter sent to mail: ${item.email}`)
    }
  }
}
</script>
