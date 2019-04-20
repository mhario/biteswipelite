import React from 'react'

import { Card } from 'react-swipeable-cards'

const grabUrl = option => {
	return option.photos
		? option.photos[0]
		: option.image_url
}


const OptionCard = props => {
	const { option } = props

	return (
		<Card
			onSwipe={props.shift}
			superOnSwipe={() => {
				console.log('super swipe, optioncard')
				props.shiftOne()
			}}
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
		</Card>
	)
}

export default OptionCard

