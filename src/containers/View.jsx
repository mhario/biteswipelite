import React from 'react'
import { connect } from 'react-redux'
import SetupScreen from './SetupScreen'
import ResultsView from '../components/ResultsView'
import CardView from './CardView'


const View = props => {
	if (props.isLoading) {
		return <p>loading</p>
	} else if (props.isFinishedSwiping) {
		return <ResultsView 
			results={props.results}/>
	} else if (props.hasData) {
		return <CardView />
	}
	
	return <SetupScreen />
}

const mapStateToProps = state => ({
	hasData: state.spots.spots && state.spots.spots.length,
	isFinishedSwiping: state.results.isFinishedSwiping,
	results: state.results.maybes,
	isLoading: state.spots.loading
})

export default connect(
	mapStateToProps
)(View)
