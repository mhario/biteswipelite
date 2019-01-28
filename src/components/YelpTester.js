import React, { Component } from 'react'
import {
	setRestaurants,
	requestRestaurants } from '../reducers/'
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
			<div>
				testing Yelp lol
				<input 
					onChange={this.updateTerm}>
					
				</input>
				<button
					onClick={() => {
						this.props.requestRestaurants(this.state.term)
					}}>
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
	requestRestaurants(searchTerm) {
		dispatch(requestRestaurants(searchTerm))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(YelpTester)
