import React, { Component } from 'react'
import { connect } from 'react-redux'
// import ResultsList from '../components/ResultsList'

import Swipeable from 'react-swipy'
import { shiftSpot } from '../store/reducers/spots'
import { addMaybe } from '../store/reducers/results'
import SpotCard from '../components/SpotCard'

class ResultsView extends Component {

	addToMaybes(spot) {
		console.log('spot is this', spot)
		this.props.addMaybe(spot)

	}

	render() {
		const [spot] = this.props.spots

		return (
			<section className="card-view">
				{this.props.spots.length > 0 &&
					<div className="wrapper">
						<Swipeable
							buttons={({ right, left }) => (
								<div className="option-buttons">
									<button
										className=""
										onClick={left}>Nah</button>
									{/* <button
										className=""
										onClick={right}>YEAH!</button> */}
									<button
										className=""
										onClick={right}>eh maybe</button>
								</div>
							)}
							onSwipe={direction => {
								this.props.shiftSpot()
								if (direction === 'right') {
									this.addToMaybes(spot)
								}
							}}>
							<SpotCard
								spot={spot}e for this r />
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
	},
	addMaybe(spot) {
		dispatch(addMaybe(spot))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ResultsView)
