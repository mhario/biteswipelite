'use strict'
const router = require('express').Router()
const volleyball = require('volleyball')
const axios = require('axios').create({
	headers:{
		Authorization: "Bearer ifmcHckXmEX3wR_GyngSNs27MYfuZX5e_fIUXxNgM14RE5s0LENxjVSewfVHrjwl5mqAKSKTJfpwt0TVC89u1MPGYSkGLrSu8CgbwEoxANKZa5Kg4VHTQ4dNgctEXHYx"
	},
	timeout: 5000
})

router
	.get('/heartbeat', (req, res) => res.send({ ok: true }))
	// .use('/search', require('./search'))
	.use('/search', (req, res) => {
		axios({
			method: 'get',
			url: 'https://api.yelp.com/v3/businesses/search',
			params: {
				term: req.query.search,
				latitude: 37.786882,
				longitude: -122.399972
			}
		}).then(results => {
			res.send(results.data)
		}).catch(error => {
			console.error(error)
		})
	})

	// Send along any errors
	.use((err, req, res, next) => {
		console.log(err);
		res.status(500).send(err);
	})

	.use('/', function (req, res) {
		res.sendStatus(404)
	})

module.exports = router
