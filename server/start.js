'use strict'
const express = require('express')
const { resolve } = require('path')
const app = express()

const volleyball = require('volleyball')

module.exports = app
	.use(volleyball)	// basic color-coded logging

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
