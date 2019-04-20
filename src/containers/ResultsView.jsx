import React, { Component } from 'react'
import { connect } from 'react-redux'
// import OptionCard from '../components/OptionCard'
// import ResultsList from '../components/ResultsList'

import { CardWrapper } from 'react-swipeable-cards'
import OptionCard from '../components/OptionCard'
import { shiftRestaurant } from '../store/reducers/destinations.jsx'

class ResultsView extends Component {


	render() {
		// const debug = false
	
		return (
			<section className="results-view">
				<p>Results</p>
				<CardWrapper>
					{
						this.props.restaurants.map(rest => {
							return <OptionCard
								key={rest.id}
								option={rest}
								shiftOne={shiftRestaurant}/>
						})
					}
				</CardWrapper>
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
		console.log('resultsView, map ', dispatch)
		dispatch(shiftRestaurant())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ResultsView)
