<template>
  <tr>
      <th>
				Star Wars Characters
				<input @input="search" placeholder="Search" type="text" v-model="searchString">
			</th>
  </tr>
</template>

<script>
export default {
	name: 'TableHeader',
	data() {
		return {
			searchString: ''
		}
	},
	methods: {
		search() {
			this.$emit('search', this.searchString)
		}
	}
}
</script>

<style scoped>
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>