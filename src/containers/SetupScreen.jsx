import React, { Component } from 'react'
import {
	requestRestaurants } from '../store/reducers/destinations'
import { connect } from 'react-redux'
// import YelpTester from '../components/YelpTester'
import WhatsUp from '../components/WhatsUp'
import FindLocation from '../components/FindLocation'

class SetupScreen extends Component {

	_updateTerm(event) {
		this.setState({ term: event.target.value })
	}

	constructor() {
		super()
		this.state = {
			term: '',
			loading: false
		}

		this.updateTerm = this._updateTerm.bind(this)
	}

	render() {
		return (
			<section
				className="setup">
				<WhatsUp />
				<FindLocation />
				{/* <YelpTester /> */}
			</section>
		)
	}
}

const mapStateToProps = state => {

	return {
		loading: state.loading
	}
}

const mapDispatchToProps = dispatch => ({
	requestRestaurants(searchTerm) {
		dispatch(requestRestaurants(searchTerm))
	},
	// getLocation() {
	// 	dispatch(getLocation())
	// }
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SetupScreen)
