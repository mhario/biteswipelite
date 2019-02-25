import React, { Component } from 'react'
import {
	requestRestaurants } from '../store/reducers/destinations'
import { setIsSetup } from '../store/reducers/setup'

import { connect } from 'react-redux'

class YelpTester extends Component {

	_updateTerm(event) {
		this.setState({ term: event.target.value })
	}

	_requestRestaurants() {
		this.props.setIsSetup(true)
		this.props.requestRestaurants(this.state.term)
	}

	constructor() {
		super()
		this.state = {
			term: ''
		}

		this.updateTerm = this._updateTerm.bind(this)
		this.requestRestaurants = this._requestRestaurants.bind(this)
	}

	render() {
		return (
			<section
				className="test">
				<header>testing Yelp lol</header>
				
				<input
					onChange={this.updateTerm}>
				</input>
				<button
					disabled={!this.props.isLocationKnown}
					onClick={e => {
						e.preventDefault()
						this.requestRestaurants()
					}}>
					Get stuff!
				</button>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		restaurants: state.destinations.restaurants,
		loading: state.loading,
		isLocationKnown: state.location.isKnown
	}
}

const mapDispatchToProps = dispatch => ({
	requestRestaurants(searchTerm) {
		dispatch(requestRestaurants(searchTerm))
	},
	setIsSetup(isSetup) {
		dispatch(setIsSetup(isSetup))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(YelpTester)
