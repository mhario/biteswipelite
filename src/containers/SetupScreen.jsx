import React from 'react'

import WhatsUp from '../components/WhatsUp'
import FindLocation from '../components/FindLocation'
import HowMuchToSpend from '../components/HowMuchToSpend'
import Options from '../components/Options'
import YelpTester from '../components/YelpTester'

const SetupScreen = function() {
	return (
		<form
			className="setup">
			<WhatsUp />
			<FindLocation />
			<HowMuchToSpend />
			<Options />
			<YelpTester />
		</form>
	)
}

export default SetupScreen
