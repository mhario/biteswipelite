import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setRestaurants } from '../reducers/';

class YelpTester extends Component {

	requestRestaurants = () => {
		setTimeout(() => {
			this.props.setTheRestaurants([
				{ name: 'hot dogs' },
				{ name: 'beer' }
			])
		}, 500)
	}

	render() {
		return (
			<div>
				testing Yelp lol
				<button
					onClick={this.requestRestaurants}>
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
		restaurants: state.restaurants
	}
}

const mapDispatchToProps = dispatch => ({
	setTheRestaurants(rests) {
		dispatch(setRestaurants(rests))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(YelpTester)
