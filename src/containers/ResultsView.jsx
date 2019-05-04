import React, { Component } from 'react'
import { connect } from 'react-redux'
// import ResultsList from '../components/ResultsList'

import Swipeable from 'react-swipy'
import { shiftSpot } from '../store/reducers/spots'
import SpotCard from '../components/SpotCard'

class ResultsView extends Component {


	render() {
		const [spot, next] = this.props.spots

		return (
			<section className="results-view">
				<p>Results</p>
				{this.props.spots.length > 0 &&
					<div className="wrapper">
						<Swipeable
							onAfterSwipe={this.props.shiftSpot}>
							<SpotCard
								zIndex={1}
								spot={spot} />
						</Swipeable>
						{/* {next &&
							<SpotCard
								zIndex={0}
								spot={next} />} */}
					</div>
				}
				{/* {
					debug 
						? <ResultsList
							className="debug-results-view"
							results={props.spots} />
						: <SpotCard
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
