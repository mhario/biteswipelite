'use strict'
const router = require('express').Router()

router
.get('/heartbeat', (req, res) => res.send({ ok: true }))

.use('/search', require('./search'))

// Send along any errors
.use((err, req, res, next) => {
	console.error(err.Error)
	res.status(500).send(err)
})

.use('/', function(req, res) {
	res.sendStatus(404)
})

module.exports = router
