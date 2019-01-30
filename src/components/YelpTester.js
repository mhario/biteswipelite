import React, { Component } from 'react'
import {
	requestRestaurants,
	getLocation } from '../reducers/'
import { connect } from 'react-redux'

class YelpTester extends Component {

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
				className="test">
				<header>
					testing Yelp lol

				</header>
				
				<form>
					<input 
						onChange={this.updateTerm}>
					</input>
					<button
						onClick={e => {
							e.preventDefault()
							this.props.requestRestaurants(this.state.term)
						}}>
						Get stuff!	
					</button>
				</form>
				<button
					onClick={this.props.getLocation}
				>
					Get location
				</button>
				<section
					className="menu">
					{
						this.props.restaurants &&
						this.props.restaurants.map(restaurant => {
							return (
								<p
									key={restaurant.name}
								>{restaurant.name}</p>
							)
						})
					}
				</section>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		restaurants: state.restaurants,
		loading: state.loading
	}
}

const mapDispatchToProps = dispatch => ({
	requestRestaurants(searchTerm) {
		dispatch(requestRestaurants(searchTerm))
	},
	getLocation() {
		dispatch(getLocation())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(YelpTester)
