import React from 'react'

import WhatsUp from '../components/WhatsUp'
import FindLocation from '../components/FindLocation'
import HowMuchToSpend from '../components/HowMuchToSpend'
import Options from '../components/Options'
import YelpTester from '../components/YelpTester'
import Search from '../components/Search';

const SetupScreen = function() {
	return (
		<form
			className="setup">
			<WhatsUp />
			<FindLocation />
			<HowMuchToSpend />
			<Options />
			{/* <YelpTester /> */}
			<Search />
		</form>
	)
}

export default SetupScreen
