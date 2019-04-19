import React from 'react'
import { connect } from 'react-redux'
import OptionCard from '../components/OptionCard'
import ResultsList from '../components/ResultsList'

const ResultsView = props => {
	const debug = false

	return (
		<section className="results-view">
			<p>Results</p>
			{
				debug 
					? <ResultsList
						className="debug-results-view"
						results={props.restaurants} />
					: <OptionCard
						option={props.restaurants[0]} />
			}
			
			
		</section>
	)
}

const mapStateToProps = state => ({
	restaurants: state.destinations.restaurants
})

export default connect(
	mapStateToProps
)(ResultsView)
