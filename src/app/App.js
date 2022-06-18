import React, { useEffect, useState } from 'react';
import Pomodoro                       from "./utils/Pomodoro";
import ExtraData                      from "./utils/ExtraData";
import AppTitle                       from "./components/AppTitle";
import AuthorInfo                     from "./components/AuthorInfo";
import BeepAlarm                      from "./components/BeepAlarm";
import Service                        from "./components/Service";
//import TimeUtils                      from "./utils/TimeUtils";

const getTime = ( add=0 ) => new Date().getTime() + add;

const App = () => {
	// States
	const [ timer, setTimer ]                     = useState( Pomodoro.DEFAULT_TIMER );
	const [ activityTimes, setActivityTimes ]     = useState( Pomodoro.InitialActivities );
	const [ currentActivity, setCurrentActivity ] = useState( Pomodoro.TYPE_SESSION );
	const [ timeStatus, setTimeStatus ]           = useState( Pomodoro.STATE_STOP );
	const [ unlock, setUnlocked ]                 = useState( true );
	
	// Handling
	const handleActivities  = ( action, payload ) => {
		// serialize the activity (from action) with the payload value
		// into a new times object
		let times    = Object.assign( {}, activityTimes ),
		    activity = action.split( '/' )[ 0 ];
		// update value from into the object
		times[ activity ] += payload;
		
		console.log( '  [handleActivities]-->', action, payload, JSON.stringify( times ), timer );
		
		// updates the activityTimes (from action) with times object
		setActivityTimes( times );
		
		
		// console.log( currentActivity, activity, currentActivity === activity )
		
		// update timer according to the currentActivity
		if ( currentActivity === activity ) setTimer( times[ activity ] * 60 );
	}
	const handlePlaying     = ( action, payload ) => {
		console.log( '  [handlePlaying]-->', timeStatus, action, payload );
		// Redirect actions of play | pause buttons and
		// if ( payload === Pomodoro.STATE_PLAY && action !== Pomodoro.STATE_SWAP ) setTimer( timer -1 );
		if ( payload === Pomodoro.STATE_PLAY ) handleTimeHead( payload );
		if ( payload === Pomodoro.STATE_STOP ) stopTimeHead( payload );
	}
	const handleTimeHead    = ( payload ) => {
		console.log( '  |-[ PLAY ]:', payload );
		// Update timeStatus ( playing )
		setTimeStatus( payload );
		
		// Lock MomentControl Buttons (disabled)
		if ( unlock ) setUnlocked( false );
	}
	const updateHead        = ( newTimer ) => {
		if ( newTimer === 0  ) activateBeepAlarm();
		if ( newTimer === -1 ) swapService();
		if ( newTimer  >  -1 ) setTimer( newTimer );
	}
	const swapService       = () => {
		// console.log( '  |-[ SWAP ]:' );
		// setTimeStatus( Pomodoro.STATE_STOP );
		
		let isSession    = currentActivity === Pomodoro.TYPE_SESSION;
		let nextActivity = isSession
		                   ? Pomodoro.TYPE_BREAK
		                   : Pomodoro.TYPE_SESSION,
		    nextTimer    = activityTimes[ nextActivity ] * 60;
		
		setCurrentActivity( nextActivity );
		console.log( '  |-[ SWAP ]:', currentActivity, 'to:', nextActivity, ':', nextTimer );
		// console.log( 0, TimeUtils.ConvertNumberToMMSS( timer,1000) )
		setTimer( nextTimer );
		
		// TODO: ACTIVATE 10 seconds FLASH (set globalState to SWAP)
		
		handlePlaying( Pomodoro.STATE_SWAP, Pomodoro.STATE_PLAY );
	}
	const stopTimeHead      = ( payload ) => {
		// console.log( '  |-[ STOP ]:', payload );
		// Update timeStatus ( playing )
		setTimeStatus( payload );
		
		// Lock MomentControl Buttons (disabled)
		if ( !unlock ) setUnlocked( true );
		
		activateBeepAlarm( 'pause' );
	}
	const activateBeepAlarm = ( action = 'play' ) => {
		const beep       = document.getElementById(
				ExtraData.getExternalResource( 'alarm' ).id );
		beep.currentTime = 0;
		beep[ action ]();
	}
	const handleReset = ( action, payload ) => { //OK
		console.log( '  [handleReset]-->', action, payload, timeStatus );
		setTimeStatus( Pomodoro.STATE_STOP );
		activateBeepAlarm( 'pause' );
		setTimer( Pomodoro.DEFAULT_TIMER );
		setActivityTimes( Pomodoro.InitialActivities );
		setCurrentActivity( Pomodoro.TYPE_SESSION );
		setUnlocked( true );
	}
	
	// React Effects
	useEffect( ()=> {
		if ( timeStatus === Pomodoro.STATE_PLAY && timer > -1 ) {
			const nextAt     = getTime( 1000 );
			const temporized = setTimeout( () => {
						updateHead( timer - 1 );
					},
					nextAt - getTime() );
					return () => clearTimeout( temporized );
		}
		/*else if ( timeStatus === Pomodoro.STATE_PLAY && timer === 0 ) {
			console.log( 'ZERO' );
			//activateBeepAlarm();
			//swapService();
		}*/
	});
	
	// Result
	return (
			<section id="clock">
				{ /** Working OK */ }
				<AppTitle title={ ExtraData.getProjectTitle() } />
				
				
				{ /** BEGIN HERE !!! */ }
				
				<Service activityTimes={ activityTimes }
				         updateActivityTimes={ handleActivities }
				         timeStatus={ timeStatus }
				         updateTimeStatus={ handlePlaying }
				         resetService={ handleReset }
				         currentActivity={ currentActivity }
				         unlock={ unlock }
				         timer={ timer } />
				
				{ /** END HERE!!! */ }
				
				{ /** Working OK */ }
				<AuthorInfo authorInfo={ ExtraData.getProjectAuthor() } />
				
				{ /*TODO: May be could need the timer on the BeepAlarm props */ }
				<BeepAlarm alarm={ ExtraData.getExternalResource( 'alarm' ) } />
			</section>
	);
}

export default App;