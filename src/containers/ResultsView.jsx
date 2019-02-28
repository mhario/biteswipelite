import React from 'react'
import { connect } from 'react-redux'

const ResultsView = props => {
	return (
		<section className="results-view">
			<p>Results</p>
			<ul>
				{
					props.restaurants.map(rest => {
						return (
							<li
								key={rest.id}>
								{rest.name}
								<img
									src={rest.image_url}
								/>
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
