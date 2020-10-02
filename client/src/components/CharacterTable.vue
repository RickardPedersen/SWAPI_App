<template>
  <table class="characterList">
		
    <TableHeader @search="search" />
    <template v-for="(character, index) in characters">
      <TableRow :key="index" :characterName="character.name" />
    </template>
		<Pagination @back="previousPage" @next="nextPage" />
  </table>
</template>

<script>
import Requests from '../Requests.js'
import TableHeader from '../components/TableHeader'
import TableRow from '../components/TableRow'
import Pagination from '../components/Pagination'

export default {
  name: 'CharacterTable',
  data() {
    return {
			characters: [],
			page: 1,
			count: 0,
			searchString: ''
    }
  },
  components: {
    TableHeader,
		TableRow,
		Pagination
  },
  created() {
		this.updateTable(this.page, this.searchString)
	},
	methods: {
		nextPage() {
			if (this.page < Math.ceil(this.count / 10)) {
				this.updateTable(++this.page, this.searchString)
			}
		},
		previousPage() {
			if (this.page > 1) {
				this.updateTable(--this.page, this.searchString)
			}
		},
		async updateTable(page = 1, search = '') {
			console.log('Page: ' + this.page)
			const data = await Requests.getCharacters(page, search)
			this.characters = data.results
			this.count = data.count
			console.log(this.characters)
			console.log(this.count)
		},
		search(value = '') {
			this.searchString = value
			this.page = 1
			this.updateTable(this.page, this.searchString)
		}
	}
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 24%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
