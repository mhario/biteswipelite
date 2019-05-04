import React, { Component } from 'react'
import { connect } from 'react-redux'
// import ResultsList from '../components/ResultsList'

import Swipeable from 'react-swipy'
import { shiftSpot } from '../store/reducers/spots'

class ResultsView extends Component {


	render() {
		const grabUrl = option => {
			return option.photos
				? option.photos[0]
				: option.image_url
		}

		const [spot] = this.props.spots

		return (
			<section className="results-view">
				<p>Results</p>
				{this.props.spots.length > 0 &&
					<div className="wrapper">
						<Swipeable
							onAfterSwipe={this.props.shiftSpot}>
							<article
								className="option-card">
								<header>
									<div
										className="banner"
										role="presentation"
										style={{ backgroundImage:
											`url(${grabUrl(spot)})`
										}}
									/>
									<span className="name">
										{spot.name}
									</span>
								</header>
								<p>Rating: {spot.rating}</p>
								<p>Distance:
									{spot.distance.toFixed(2)}
								</p>
								<p>{spot.price}</p>
							</article>
						</Swipeable>
					</div>
				}
				{/* {
					debug 
						? <ResultsList
							className="debug-results-view"
							results={props.spots} />
						: <OptionCard
							option={props.spots[0]} />
				} */}
	
			</section>
		)
	}
}

const mapStateToProps = state => ({
	spots: state.spots.spots,
	// need to watch spotCount to trigger re-render
	// even though its not being used
	spotCount: state.spots.spots.length
})

const mapDispatchToProps = dispatch => ({
	shiftSpot() {
		dispatch(shiftSpot())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ResultsView)
