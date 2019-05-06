'use strict'
const express = require('express')
const app = express()

const cors = require('cors')
const volleyball = require('volleyball')

require('dotenv').config()

module.exports = app
.use(volleyball)	// basic color-coded logging
.use(cors())		// cors prevents requests, at least on locahost

.use('/api', require('./api'))

.get('/*', (req, res) => {
	res.sendStatus(404)
	// res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))
	// hove not built front-end yet; using dev server for now
})

const server = app.listen(8080,
	() => {
		console.log('Listening on 8080')
	}
)
