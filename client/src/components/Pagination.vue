<template>
  <tr class="pagination">
		<td>
			<button @click="pageSwitch('next')">&raquo;</button>
			<button @click="pageSwitch('back')">&laquo;</button>
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
			this.$emit(val)
		}
	}
}
</script>

<style scoped>
td {
  border: 2px solid #ffff66;
	
  text-align: right;
}
/* Pagination links */
.pagination button {
  color: #ffff66;
  float: right;
  padding: 8px 16px;
	font-size: large;
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
.pagination button:hover {background-color: rgb(36, 35, 35);}
</style>
