<template>
  <table class="characterList">
    <TableHeader />
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
			count: 0
    }
  },
  components: {
    TableHeader,
		TableRow,
		Pagination
  },
  created() {
		this.updateTable(this.page)
	},
	methods: {
		nextPage() {
			if (this.page < Math.ceil(this.count / 10)) {
				this.updateTable(++this.page)
			}
		},
		previousPage() {
			if (this.page > 1) {
				this.updateTable(--this.page)
			}
		},
		async updateTable(page) {
			console.log('Page: ' + this.page)
			const data = await Requests.getCharacters(page)
			this.characters = data.results
			this.count = data.count
			console.log(this.characters)
			console.log(this.count)
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
