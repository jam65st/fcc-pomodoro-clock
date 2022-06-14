import React, { useState } from 'react';
import Pomodoro            from "./utils/Pomodoro";
import ExtraData           from "./utils/ExtraData";
import AppTitle            from "./components/AppTitle";
import AuthorInfo          from "./components/AuthorInfo";
import BeepAlarm           from "./components/BeepAlarm";
import Service             from "./components/Service";


const App = () => {
	const [ timer, setTimer ]     = useState( Pomodoro.DEFAULT_TIMER );
	const [ activityTimes, setActivityTimes ] = useState( {
		break  : Pomodoro.BREAK_TIME,
		session: Pomodoro.SESSION_TIME
	} );
	
	//console.log( 'App:', timer );
	
	const handleActivities = ( action, payload ) => {
		let times = Object.assign( {}, activityTimes );
		times[ action.split('/')[0] ] += payload;
		console.log( '  [handleActivities]-->', action, payload, JSON.stringify( times ) );
		setActivityTimes( times );
	}
	
	return (
			<section id="clock">
				{ /** Working OK */ }
				<AppTitle title={ ExtraData.getProjectTitle() } />
				
				
				{ /** BEGIN HERE !!! */ }
				
				<Service activityTimes={ activityTimes }
				   updateActivityTimes={ handleActivities }
				         timer={ timer } />
				Hello-world { Pomodoro.SESSION_TITLE }
				test: { Pomodoro.BREAK_TITLE }
				
				{ /** END HERE!!! */ }
				
				{ /** Working OK */ }
				<AuthorInfo authorInfo={ ExtraData.getProjectAuthor() } />
				
				{ /*TODO: May be could need the timer on the BeepAlarm props */ }
				<BeepAlarm alarm={ ExtraData.getExternalResource( 'alarm' ) } />
			</section>
	);
}

export default App;