import React, { Component } from 'react'
import { connect } from 'react-redux'
// import OptionCard from '../components/OptionCard'
// import ResultsList from '../components/ResultsList'

import Swipeable from 'react-swipy'
import { shiftRestaurant } from '../store/reducers/destinations.jsx'

class ResultsView extends Component {


	render() {
		// const debug = false
		const grabUrl = option => {
			return option.photos
				? option.photos[0]
				: option.image_url
		}

		const spots = this.props.restaurants

		return (
			<section className="results-view">
				<p>Results</p>
				{spots.length > 0 && (

					<div className="wrapper">
						<Swipeable
							onAfterSwipe={this.props.shiftRestaurant}>
							<article
								className="option-card">
								<header>
									<div
										className="banner"
										role="presentation"
										style={{ backgroundImage:
											`url(${grabUrl(spots[0])})`
										}}
									/>
									<span className="name">
										{spots[0].name}
									</span>
								</header>
								<p>Rating: {spots[0].rating}</p>
								<p>Distance:
									{spots[0].distance.toFixed(2)}
								</p>
								<p>{spots[0].price}</p>
							</article>
						</Swipeable>
					</div>
				)}
				{/* {
					debug 
						? <ResultsList
							className="debug-results-view"
							results={props.restaurants} />
						: <OptionCard
							option={props.restaurants[0]} />
				} */}
	
			</section>
		)
	}
}

const mapStateToProps = state => ({
	restaurants: state.destinations.restaurants
})

const mapDispatchToProps = dispatch => ({
	shiftRestaurant() {
		dispatch(shiftRestaurant())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ResultsView)
