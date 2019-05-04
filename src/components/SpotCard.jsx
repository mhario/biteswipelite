import React from 'react'


const SpotCard = props => {
	const grabUrl = option => {
		return option.photos
			? option.photos[0]
			: option.image_url
	}

	return (
		<article
			className={'option-card'}
			style={{ zIndex: props.zIndex }}>
			<header>
				<div
					className="banner"
					role="presentation"
					style={{
						backgroundImage:
							`url(${grabUrl(props.spot)})`
					}}
				/>
				<span className="name">
					{props.spot.name}
				</span>
			</header>
			<p>Rating: {props.spot.rating}</p>
			<p>Distance:
				{props.spot.distance.toFixed(2)}
			</p>
			<p>{props.spot.price}</p>
		</article>
	)
}

export default SpotCard
