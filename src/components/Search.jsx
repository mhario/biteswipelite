import React from 'react'
import { connect } from 'react-redux'

import { requestSpots } from '../store/reducers/spots'
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
				className="search"
				onClick={this.search}>
				Ready!
			</button>
		)
	}

	componentDidMount() {
		setTimeout(() => {
			document.querySelector('.search').click()
		}, 500)
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
				params.query = 'Drive Thru'
				break
				
			case 'carry-out':
				params.query = 'Carry out'
				break
				
				// case 'stay-in':
					
				// 	break

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
		dispatch(requestSpots(term))
	},
	setIsSetup(state) {
		dispatch(setIsSetup(state))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search)
