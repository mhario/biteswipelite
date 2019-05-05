import React from 'react'
import { connect } from 'react-redux'
import SetupScreen from './SetupScreen'
import ResultsView from '../components/ResultsView'
import CardView from './CardView'


const View = props => {
	if (!props.isSetup) {
		return <SetupScreen />
	} else if (props.hasResults) {
		return <ResultsView 
			results={props.results}/>
	} else if (props.hasDestinations) {
		return <CardView />
	}

	return <p>loading</p>
}

const mapStateToProps = state => ({
	isSetup: state.setup.isSetup,
	hasDestinations: state.spots.spots && state.spots.spots.length,
	hasResults: state.results.hasResults,
	results: state.results.maybes
})

export default connect(
	mapStateToProps
)(View)
