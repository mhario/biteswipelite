import React from 'react'
import { connect } from 'react-redux'

import { requestSpots } from '../store/reducers/spots'

class Search extends React.Component {
	constructor(props) {
		super(props)

		this.buildSearch = this._buildSearch.bind(this)
		this.search = this._search.bind(this)
	}

	render() {

		return (
			<button
				disabled={!this.props.location.isKnown}
				className="search"
				onClick={this.search}>
				Ready!
			</button>
		)
	}

	_search(e) {
		e.preventDefault()

		this.props.executeSearch(this.buildSearch())
	}

	_buildSearch() {
		const params = {}

		switch (this.props.mode) {
			case 'go-out':
				params.categeries = 'Restaurants'
				break
				
			case 'drive-thru':
				params.query = 'Drive Thru'
				break
				
			case 'carry-out':
				params.query = 'Carry out'
				break
				
				// case 'stay-in':
				// 	break
			default:
		}

		this._getLocation(params)

		return params
	}

	_getLocation(params) {
		const { latitude, longitude } = this.props.location.coords
		const { zipCode } = this.props.location

		if (latitude && longitude) {
			params.latitude = latitude
			params.longitude = longitude
		} else {
			params.location = zipCode
		}

		return params
	}
}


const mapStateToProps = state => ({
	mode: state.setup.mode,
	location: state.location
})

const mapDispatchToProps = dispatch => ({
	executeSearch(term) {
		dispatch(requestSpots(term))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search)
