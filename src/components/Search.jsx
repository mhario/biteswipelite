import React from 'react'
import { connect } from 'react-redux'

import { requestRestaurants } from '../store/reducers/destinations'
import { setIsSetup } from '../store/reducers/setup'

class Search extends React.Component {
	constructor(props) {
		super(props)

		this.buildSearch = this._buildSearch.bind(this)
		this.search = this._search.bind(this)
	}

	render() {
		return (
			<button
				onClick={this.search}>
				Ready!
			</button>
		)
	}

	_search(e) {
		e.preventDefault()

		this.props.executeSearch(this.buildSearch())
		this.props.setIsSetup(true)
	}

	_buildSearch() {
		const params = {}

		switch (this.props.mode) {
			case 'go-out':
				params.categeries = 'Restaurants'
				break
				
			case 'drive-thru':
				params.categories = 'Fast Food'
				break
				
			case 'stay-in':
				
				break

			default:
		}

		return params
	}
}


const mapStateToProps = state => ({
	mode: state.setup.mode
})

const mapDispatchToProps = dispatch => ({
	executeSearch(term) {
		dispatch(requestRestaurants(term))
	},
	setIsSetup(state) {
		dispatch(setIsSetup(state))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search)