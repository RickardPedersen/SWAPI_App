<template>
  <tr class="pagination">
		<td>
			<button @click="pageSwitch('back')">&laquo;</button>
			<button @click="pageSwitch('next')">&raquo;</button>
		</td>
	</tr>
</template>

<script>
export default {
  name: 'Pagination',
  props: {

	},
	methods: {
		pageSwitch(val) {
			this.$emit(val, 'someValue')
		}
	}
}
</script>

<style scoped>
td {
  border: 1px solid #dddddd;
  text-align: right;
}
/* Pagination links */
.pagination button {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
	border: none;
	background: none;
  transition: background-color .3s;
}

/* Style the active/current link 
.pagination a.active {
  background-color: dodgerblue;
  color: white;
}*/

/* Add a grey background color on mouse-over */
.pagination button:hover {background-color: #ddd;}
</style>
