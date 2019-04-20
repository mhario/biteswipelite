import React, { Component } from 'react'
import { connect } from 'react-redux'
// import OptionCard from '../components/OptionCard'
// import ResultsList from '../components/ResultsList'

import { CardWrapper, Card } from 'react-swipeable-cards'
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
							return <Card
								key={rest.id}
								onSwipe={this.props.shiftRestaurant}>
								{/* <OptionCard option={rest} /> */}
								{rest.name}
							</Card>
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
		dispatch(shiftRestaurant())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ResultsView)
