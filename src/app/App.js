import React, { useEffect, useState } from 'react';
import Pomodoro                       from "./utils/Pomodoro";
import ExtraData                      from "./utils/ExtraData";
import AppTitle                       from "./components/AppTitle";
import AuthorInfo                     from "./components/AuthorInfo";
import BeepAlarm                      from "./components/BeepAlarm";
import Service                        from "./components/Service";

const getTime = ( add=0 ) => new Date().getTime() + add;

const App = () => {
	// States
	const [ timer, setTimer ]                     = useState( Pomodoro.DEFAULT_TIMER );
	const [ activityTimes, setActivityTimes ]     = useState( Pomodoro.InitialActivities );
	const [ currentActivity, setCurrentActivity ] = useState( Pomodoro.TYPE_SESSION );
	const [ timeStatus, setTimeStatus ]           = useState( Pomodoro.STATE_STOP );
	const [ activityStatus, setActivityStatus ]   = useState( Pomodoro.STATE_STOP );
	const [ unlock, setUnlocked ]                 = useState( true );
	
	// Handling
	const handleActivities  = ( action, payload ) => {
		// serialize the activity (from action) with the payload value
		// into a new times object
		let times    = Object.assign( {}, activityTimes ),
		    activity = action.split( '/' )[ 0 ],
		    current  = times[ activity ];
		
		payload = ( current > Pomodoro.MINIMUM_TIME && current < Pomodoro.MAXIMUM_TIME ) ? payload : 0;
		
		// update value from into the object
		times[ activity ] += payload;
		
		// updates the activityTimes (from action) with times object
		setActivityTimes( times );
		
		// update timer according to the currentActivity
		if ( currentActivity === activity ) setTimer( times[ activity ] * 60 );
	}
	const handlePlaying     = ( action, payload ) => {
		// Redirect actions of play | pause buttons and
		setActivityStatus( action === Pomodoro.STATE_SWAP ? action : payload )
		
		if ( payload === Pomodoro.STATE_PLAY ) handleTimeHead( payload );
		if ( payload === Pomodoro.STATE_STOP ) stopTimeHead( payload );
	}
	const handleTimeHead    = ( payload ) => {
		// Update timeStatus ( playing )
		setTimeStatus( payload );
		
		// Lock MomentControl Buttons (disabled)
		if ( unlock ) setUnlocked( false );
	}
	const updateHead        = ( newTimer ) => {
		if ( newTimer === 30  ){
			// enabling the visual alarm again
			setActivityStatus( Pomodoro.STATE_PLAY );
		}
		if ( newTimer === 0  ){
			// triggering the alarms (visual and sound)
			activateBeepAlarm();
			setActivityStatus( Pomodoro.STATE_SWAP );
		}
		// Swap service
		if ( newTimer === -1 ) swapService();
		// update timer head
		if ( newTimer  >  -1 ) setTimer( newTimer );
	}
	const swapService       = () => {
		setTimeStatus( Pomodoro.STATE_STOP );
		
		let isSession    = currentActivity === Pomodoro.TYPE_SESSION;
		let nextActivity = isSession
		                   ? Pomodoro.TYPE_BREAK
		                   : Pomodoro.TYPE_SESSION,
		    nextTimer    = activityTimes[ nextActivity ] * 60;
		
		setCurrentActivity( nextActivity );
		
		setTimer( nextTimer );
		
		handlePlaying( Pomodoro.STATE_SWAP, Pomodoro.STATE_PLAY );
	}
	const stopTimeHead      = ( payload ) => {
		// Update timeStatus ( playing )
		setTimeStatus( payload );
		
		// Lock MomentControl Buttons (disabled)
		if ( !unlock ) setUnlocked( true );
		
		// Deactivate alarm
		activateBeepAlarm( 'pause' );
	}
	const activateBeepAlarm = ( action = 'play' ) => {
		const beep       = document.getElementById(
				ExtraData.getExternalResource( 'alarm' ).id );
		beep.currentTime = 0;
		beep[ action ]();
	}
	const handleReset = ( action, payload ) => {
		activateBeepAlarm( 'pause' );
		setTimeStatus( Pomodoro.STATE_STOP );
		setTimer( Pomodoro.DEFAULT_TIMER );
		setActivityTimes( Pomodoro.InitialActivities );
		setActivityStatus( Pomodoro.STATE_STOP );
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
	});
	
	// Result
	return (
			<section id="clock" status={ activityStatus }>
				
				<AppTitle title={ ExtraData.getProjectTitle() } />
				
				<Service activityTimes={ activityTimes }
				         updateActivityTimes={ handleActivities }
				         timeStatus={ timeStatus }
				         updateTimeStatus={ handlePlaying }
				         resetService={ handleReset }
				         currentActivity={ currentActivity }
				         unlock={ unlock }
				         timer={ timer } />
				
				<AuthorInfo authorInfo={ ExtraData.getProjectAuthor() } />
				
				<BeepAlarm alarm={ ExtraData.getExternalResource( 'alarm' ) } />
			</section>
	);
}

export default App;