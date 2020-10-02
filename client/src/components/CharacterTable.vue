<template>
  <table class="characterList">
    <TableHeader @search="search" />

		<tbody>
			<template v-for="(character, index) in characters">
				<TableRow ref="rows" :key="index" :character="character" />
			</template>
		</tbody>

		<tfoot>
			<Pagination @back="previousPage" @next="nextPage" />
		</tfoot>
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
				for(const row of this.$refs.rows) {
					row.closeInfo()
				}
			}
		},
		previousPage() {
			if (this.page > 1) {
				this.updateTable(--this.page, this.searchString)
				for(const row of this.$refs.rows) {
					row.closeInfo()
				}
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
			for(const row of this.$refs.rows) {
				row.closeInfo()
			}
		}
	}
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 350px;
}
</style>
