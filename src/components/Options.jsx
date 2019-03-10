import React from 'react'
import { connect } from 'react-redux'

import { setDistance, setDrinks } from '../store/reducers/setup'

const classNames = require('classnames')

const Options = props => {
	const active = props.mode === 'go-out' ||
		props.mode === 'drive-thru'
	const drinksActive = props.mode === 'go-out'

	return (
		<section className="options">
			<div
				className={classNames('options', {
					'active': active //eslint-disable-line
				})}>
				<label>
					How far's too far?
					<br />
					<input
						type="text"
						disabled={!active}
					/> mi
				</label>
				<label>
					<input
						type="checkbox"
						name="drinks"
						value={props.drinks}
						onChange={props.toggleDrinks}
						disabled={!drinksActive} />
					Drinks
				</label>
			</div>
		</section>
	)
}

const mapStateToProps = state => {
	return {
		mode: state.setup.mode,
		maxDistance: state.setup.maxDistance,
		drinks: state.setup.drinks
	}
}

const mapDispatchToProps = dispatch => ({
	toggleDrinks(e) {
		const drinks = e.target.value

		dispatch(setDrinks(drinks))
	},
	updateDistance(e) {
		const distance = e.target.value

		dispatch(setDistance(distance))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Options)
