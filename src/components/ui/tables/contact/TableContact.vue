<template>
  <div class="table-wrapper">
    <table class="table">
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  &-wrapper {

  }
  th, td {
    border: 1px solid var(--border-color)
  }
}
</style>