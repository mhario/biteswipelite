import React from 'react'

const resultsView = props => {

	const randomPickIndex = Math.floor(Math.random() * props.results.length)

	const pick = props.results[randomPickIndex]

	return (
		<article className="results-view">
			<h1>GO HERE.</h1>
			{pick.name}

			<button
				className="reset-btn"
				disabled
				title="There is no going back.">
				Go Back
			</button>
		</article>
	)

	// return <ul className="results-list">
	// 	{
	// 		props.results && props.results.map(rest => {
	// 			return (
	// 				<li
	// 					key={rest.id}>
	// 					<p className="name">
	// 						{rest.name} <br/>
	// 						{rest.distance.toFixed(2) } m
	// 					</p>
	// 					<img
	// 						src={rest.image_url}
	// 						alt="alttext"
	// 					/>
	// 				</li>
	// 			)
	// 		})
	// 	}
	// </ul>
}

export default resultsView
