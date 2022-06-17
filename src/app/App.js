import React, { useEffect, useState } from 'react';
import Pomodoro                       from "./utils/Pomodoro";
import ExtraData                      from "./utils/ExtraData";
import AppTitle                       from "./components/AppTitle";
import AuthorInfo                     from "./components/AuthorInfo";
import BeepAlarm                      from "./components/BeepAlarm";
import Service                        from "./components/Service";

const initialActivities = {
	break  : Pomodoro.BREAK_TIME,
	session: Pomodoro.SESSION_TIME
}

const getTime = ( add=0 ) => new Date().getTime() + add;

const App = () => {
	const [ timer, setTimer ]                     = useState( Pomodoro.DEFAULT_TIMER );
	const [ activityTimes, setActivityTimes ]     = useState( initialActivities );
	const [ currentActivity, setCurrentActivity ] = useState( Pomodoro.TYPE_SESSION );
	const [ timeStatus, setTimeStatus ]           = useState( Pomodoro.STATE_STOP );
	const [ unlock, setLock ]                     = useState( true );
	
	//console.log( 'App:', timer, unlock );
	
	const handleActivities  = ( action, payload ) => {
		// serialize the activity (from action) with the payload value
		// into a new times object
		let times    = Object.assign( {}, activityTimes ),
		    activity = action.split( '/' )[ 0 ];
		// update value from into the object
		times[ activity ] += payload;
		
		console.log( '  [handleActivities]-->', action, payload, JSON.stringify( times ) );
		
		// updates the activityTimes (from action) with times object
		setActivityTimes( times );
		
		
		console.log( currentActivity, activity, currentActivity === activity )
		
		// update timer according to the currentActivity
		if ( currentActivity === activity ) setTimer( times[ activity ] * 60 );
	}
	const handlePlaying     = ( action, payload ) => {
		console.log( '  [handlePlaying]-->', timeStatus, action, payload );
		// Redirect actions of play | pause buttons and
		if ( payload === Pomodoro.STATE_PLAY ) handleTimeHead( payload );
		if ( payload === Pomodoro.STATE_STOP ) stopTimeHead( payload );
	}
	const handleTimeHead    = ( payload ) => {
		console.log( '  |-[ PLAY ]:', payload );
		// Update timeStatus ( playing )
		setTimeStatus( payload );
		
		// Lock MomentControl Buttons (disabled)
		if ( unlock ) setLock( false );
	}
	const updateHead        = ( newTimer ) => {
		if ( newTimer === Pomodoro.DEFAULT_MAX_CHANGE ) console.warn(
				'| -> [ update color para avisar que falta un minuto ]' );
		
		if ( newTimer === Pomodoro.DEFAULT_MIN_CHANGE ) console.warn(
				'| -> [ update color para avisar que falta medio minuto ]' );
		
		if ( newTimer > 0 ) setTimer( newTimer );
		
		if ( newTimer === 0 ){
			activateBeepAlarm();
			swapService()
		}
	}
	const swapService       = () => {
		console.log( '  |-[ SWAP ]:' );
		
		let isSession    = currentActivity === Pomodoro.TYPE_SESSION;
		let nextActivity = isSession
		                   ? Pomodoro.TYPE_BREAK
		                   : Pomodoro.TYPE_SESSION,
		    nextTimer    = activityTimes[ nextActivity ] * 60;
		
		setCurrentActivity( nextActivity );
		setTimer( nextTimer );
		
		console.log( '  |-> --> --> Update color para avisar REMOVER AVISO DE minuto' );
		// TODO: REMOVE 1minute left Warning
		// TODO: ACTIVATE 10 seconds FLASH (set globalState to SWAP)
		handlePlaying( Pomodoro.STATE_SWAP, Pomodoro.STATE_PLAY );
	}
	const stopTimeHead      = ( payload ) => {
		console.log( '  |-[ STOP ]:', payload );
		// Update timeStatus ( playing )
		setTimeStatus( payload );
		
		// Lock MomentControl Buttons (disabled)
		if ( !unlock ) setLock( true );
	}
	const activateBeepAlarm = ( action = 'play' ) => {
		const beep       = document.getElementById(
				ExtraData.getExternalResource( 'alarm' ).id );
		beep.currentTime = 0;
		beep[ action ]();
	}
	const handleReset = ( action, payload ) => { //OK
		console.log( '  [handleReset]-->', action, payload, timeStatus );
		stopTimeHead( Pomodoro.STATE_STOP );
		setTimer( Pomodoro.DEFAULT_TIMER );
		setActivityTimes( initialActivities );
		setCurrentActivity( Pomodoro.TYPE_SESSION );
		setLock( true );
	}
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