import React from 'react'
import { connect } from 'react-redux'


class WhatsUp extends React.Component {
	constructor() {
		super()
		this.state = {
			isModeGoOut: false
		}
		this.toggleMode = this._toggleMode.bind(this)
	}

	_toggleMode() {
		this.setState({
			isModeGoOut: !this.state.isModeGoOut
		})
	}

	render() {
		return (
			<section className="whats-up">
				<form>
					<p>What's goin on?</p>
					<label
						className="switch">
						<input
							type="radio"
							name="whatsUp"/>
						Going out?
					</label>
					<label
						className="switch">
						<input
							type="radio"
							name="whatsUp"/>
						Hitting the drive thru?
					</label>
					<label
						className="switch">
						<input
							type="radio"
							name="whatsUp"/>
						Looking to stay in?
					</label>
				</form>
			</section>
		)
	}

}

export default connect(
	// mapStateToProps,
	// mapDispatchToProps
)(WhatsUp)
