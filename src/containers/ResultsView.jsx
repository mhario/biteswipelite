import React, { Component } from 'react'
import { connect } from 'react-redux'
// import ResultsList from '../components/ResultsList'

import Swipeable from 'react-swipy'
import { shiftSpot } from '../store/reducers/spots'
import SpotCard from '../components/SpotCard'

class ResultsView extends Component {


	render() {
		const [spot] = this.props.spots

		return (
			<section className="results-view">
				{this.props.spots.length > 0 &&
					<div className="wrapper">
						<Swipeable
							buttons={({ right, left }) => (
								<div className="option-buttons">
									<button
										className=""
										onClick={left}>Nah</button>
									<button
										className=""
										onClick={right}>... ehh</button>
									<button
										className=""
										onClick={right}>YEAH!</button>
								</div>
							)}
							onAfterSwipe={this.props.shiftSpot}>
							<SpotCard
								spot={spot} />
						</Swipeable>
						{/* {next &&
							<SpotCard
								zIndex={0}
								spot={next} />} */}
					</div>
				}
				{/* <ResultsList
					className="debug-results-view"
					results={props.spots} /> */}
	
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
