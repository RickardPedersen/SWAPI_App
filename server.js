require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 7070

app.use(express.static('public'))

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`)
})
