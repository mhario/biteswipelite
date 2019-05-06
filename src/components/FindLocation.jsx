import React from 'react'
import { connect } from 'react-redux'
import { setPosition, setZip, setWaiting } from '../store/reducers/location'

class FindLocation extends React.Component {
	constructor() {
		super()
		this.state = {
			zip: 0,
			isDenied: false
		}

		this.setPosition = this._setPosition.bind(this)
		this.updateZIP = this._updateZIP.bind(this)
		this.getPosition = this._getPosition.bind(this)
	}

	_setPosition(position) {
		this.props.setPosition(position.coords)
	}

	componentDidMount() {
		navigator.permissions
			? navigator.permissions.query({
				name: 'geolocation'
			}).then(permission => {
				if (permission.state === 'granted') {
					navigator.geolocation
					.getCurrentPosition(this.setPosition)
				}
			})
			: this.setState({ isDenied: true })
	}


	_getPosition(e) {
		e && e.preventDefault()
		navigator.permissions
			? navigator.permissions.query({
				name: 'geolocation'
			}).then(permission => {
				console.log('lookin at', permission)
				permission.state === 'prompt' || permission.state === 'granted'
					? navigator.geolocation.getCurrentPosition(this.setPosition)
					: this.setState({ isDenied: true })
			})
			: this.setState({ isDenied: true })

		// if (navigator.geolocation) {
		// 	navigator.geolocation
		// 	.getCurrentPosition(this.setPosition)
		// }
	}
	// }

	_updateZIP(e) {
		const zip = e.target.value

		this.setState({ zip })

	}

	getButton() {
		if (this.state.zip) {
			return (
				<button
					onClick={(e) => {
						e.preventDefault()
						const newZip = this.state.zip

						this.props.setZip(newZip)
					}}> Submit </button>
			)
		}
		
		return (
			<button
				onClick={this.getPosition}>
				IC
			</button>
		)
	}

	render() {
		return (
			<section>
				{
					this.props.isPositionKnown
						? <p>Got it!</p>
						: <label>
							<p>Where you at?</p>
							<input
								placeholder="ZIP"
								onChange={this.updateZIP}
							/>
							{ this.getButton() }
						</label>
				}
			</section>
		)
	}

}

const mapStateToProps = state => {
	return {
		isPositionKnown: state.location.isKnown,
		isWaiting: state.location.isWaiting
	}
}

const mapDispatchToProps = dispatch => ({
	setPosition(location) {
		dispatch(setPosition(location))
	},
	setZip(zip) {
		dispatch(setZip(zip))
	},
	setWaiting(waiting) {
		dispatch(setWaiting(waiting))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FindLocation)
