import React from 'react'
import { connect } from 'react-redux'
import SetupScreen from './SetupScreen'
import ResultsView from './ResultsView'


const View = props => {
	if (!props.isSetup) {
		return <SetupScreen />
	} else if (props.hasDestinations) {
		return <ResultsView />
	}

	return <p>loading</p>
}

const mapStateToProps = state => ({
	isSetup: state.setup.isSetup,
	hasDestinations: state.destinations.restaurants.length
})

export default connect(
	mapStateToProps
)(View)
