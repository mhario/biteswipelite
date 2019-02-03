import React from 'react'
import { connect } from 'react-redux'
import { setMode } from '../store/reducers/setup'
const classNames = require('classnames')

class WhatsUp extends React.Component {

	render() {
		return (
			<section className="whats-up">
				<form>
					<header>What's goin on?</header>
					<label
						className={classNames({
							'active': this.props.mode === 'go-out'
						})}>
						<input
							onChange={this.props.updateMode}
							checked={this.props.mode === 'go-out'}
							type="radio"
							name="whats-up"
							value="go-out"/>
						Going out?
					</label>
					<div
						className={classNames('options', {
							'active': this.props.mode === 'go-out'
						}) }>
						<label>
							How far's too far?
							<input
								type="text"
							/>
						</label>
						<label>
							<input
								type="checkbox"/>
							Drinks?
						</label>
					</div>
					<label
						className={classNames({
							'active': this.props.mode === 'drive-thru'
						})}>
						<input
							onChange={this.props.updateMode}
							checked={this.props.mode === 'drive-thru'}
							type="radio"
							name="whats-up"
							value="drive-thru"/>
						Hitting the drive thru?
					</label>
					<div
						className={classNames('options', {
							'active': this.props.mode === 'drive-thru'
						})}>
						<label>
							How far's too far?
							<input
								type="text"
							/>
						</label>
					</div>
					<label
						className={classNames({
							'active': this.props.mode === 'stay-in'
						})}>
						<input
							onChange={this.props.updateMode}
							checked={this.props.mode === 'stay-in'}
							type="radio"
							name="whats-up"
							value="stay-in"/>
						Looking to stay in?
					</label>
				</form>
			</section>
		)
	}

}

const mapStateToProps = state => ({
	mode: state.setup.mode
})

const mapDispatchToProps = dispatch => ({
	updateMode(e) {
		const mode = e.target.value
		
		dispatch(setMode(mode))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WhatsUp)
