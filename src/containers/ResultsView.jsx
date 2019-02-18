import React from 'react'
import { connect } from 'react-redux'

const ResultsView = props => {
	return (
		<section>
			<p>Results</p>
			<ul>
				{
					props.restaurants.map(rest => {
						return (
							<li
								key={rest.id}>
								{rest.name}
							</li>
						)
					})
				}
			</ul>
		</section>
	)
}

const mapStateToProps = state => ({
	restaurants: state.destinations.restaurants
})

export default connect(
	mapStateToProps
)(ResultsView)
