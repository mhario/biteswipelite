'use strict'
const router = require('express').Router()
const axios = require('axios').create({
	headers: {
		// eslint-disable-next-line
		Authorization: 'Bearer ifmcHckXmEX3wR_GyngSNs27MYfuZX5e_fIUXxNgM14RE5s0LENxjVSewfVHrjwl5mqAKSKTJfpwt0TVC89u1MPGYSkGLrSu8CgbwEoxANKZa5Kg4VHTQ4dNgctEXHYx'
	}
})

router.get('/', (req, res) => {
	return axios({
		method: 'get',
		url: 'https://api.yelp.com/v3/businesses/search',
		params: {
			term: req.query.query,
			location: req.query.location,
			latitude: req.query.latitude,
			longitude: req.query.longitude,
			limit: 50,
			'open_now': true
		}
	})
	.then(results => {
		res.send(results.data)
	})
	.catch(error => {
		console.error(error)
		res.sendStatus(400)
	})
})

module.exports = router
