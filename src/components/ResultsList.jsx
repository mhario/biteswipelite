import React from 'react'

const resultsView = props => {

	return <ul className="debug-results-view">
		{
			props.results && props.results.map(rest => {
				return (
					<li
						key={rest.id}>
						<p className="name">
							{rest.name} <br/>
							{rest.distance.toFixed(2) } m
						</p>
						<img
							src={rest.image_url}
							alt="alttext"
						/>
					</li>
				)
			})
		}
	</ul>
};

export default resultsView
