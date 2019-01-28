import React, { Component } from 'react'
import {
	setRestaurants,
	requestRestaurants } from '../reducers/'
import { connect } from 'react-redux'

class YelpTester extends Component {

	constructor() {
		super()
		this.state = {
			loading: false
		}

		// this.requestRestaurants = this._requestRestaurants.bind(this)
	}

	render() {
		return (
			<div>
				testing Yelp lol
				<button
					onClick={this.props.requestRestaurants}>
					Get stuff!	
				</button>
				<div className="menu" style={ { color: 'white' } }>
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
				</div>
			</div>
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
	setTheRestaurants(rests) {
		dispatch(setRestaurants(rests))
	},
	requestRestaurants() {
		dispatch(requestRestaurants())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(YelpTester)
