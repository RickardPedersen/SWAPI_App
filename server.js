require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 7070

app.use(express.static('public'))

app.listen(port, () => {
	console.log('Server running at:')
	console.log(`- Port:  ${port}`)
	console.log(`- Local: http://localhost:${port}`)
})
