import React, { Component } from 'react'
import {
	requestSpots } from '../store/reducers/spots'
import { setIsSetup } from '../store/reducers/setup'

import { connect } from 'react-redux'

class YelpTester extends Component {

	_updateTerm(event) {
		this.setState({ term: event.target.value })
	}

	_requestSpots() {
		this.props.setIsSetup(true)
		this.props.requestSpots(this.state.term)
	}

	constructor() {
		super()
		this.state = {
			term: ''
		}

		this.updateTerm = this._updateTerm.bind(this)
		this.requestSpots = this._requestSpots.bind(this)
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
						this.requestSpots()
					}}>
					Get stuff!
				</button>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		spots: state.spots.spots,
		loading: state.loading,
		isLocationKnown: state.location.isKnown
	}
}

const mapDispatchToProps = dispatch => ({
	requestSpots(searchTerm) {
		dispatch(requestSpots(searchTerm))
	},
	setIsSetup(isSetup) {
		dispatch(setIsSetup(isSetup))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(YelpTester)
