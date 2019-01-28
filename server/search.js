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
			latitude: 37.786882,
			longitude: -122.399972
		}
	})
	.then(results => {
		res.send(results.data)
	})
	.catch(error => {
		console.error(error)
	})
})

module.exports = router
