import React from 'react'

const grabUrl = option => {
	return option.photos
		? option.photos[0]
		: option.image_url
}

const OptionCard = props => {
	const { option } = props

	return (
		<article
			className="option-card">
			<header>
				<div
					className="banner"
					role="presentation"
					style={
						{ backgroundImage:
							`url(${grabUrl(option)})` }
					}
				/>
				<span className="name">
					{ option.name }
				</span>
			</header>
			<p>Rating: { option.rating }</p>
			<p>Distance: { option.distance.toFixed(2) }</p>
			<p>{ option.price }</p>
		</article>
	)
}

export default OptionCard

