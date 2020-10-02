<template>
  <tr>
      <td>{{ characterName }}</td>
  </tr>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
      characterName: String
  }
}
</script>

<style scoped>
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
