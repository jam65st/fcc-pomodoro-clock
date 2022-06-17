import React    from "react";
import Pomodoro from "../utils/Pomodoro";

const TimerControl = props => {
	/**
	 * <h2>setButton</h2>
	 * Creates or updates a button according to the received properties
	 *
	 * @example
	 * const control = setButton( 'control', false );
	 * const reset   = setButton( 'reset', false );
	 *
	 * @param type {string} Options: 'control' || 'reset'
	 * @param active {boolean}
	 * @returns {JSX.Element} Interactive element that acts such as button
	 */
	const setButton = ( type, active ) => {
		const typeButton = type === 'control' ? 'start_stop' : 'reset';
		const icon       = typeButton === 'reset' ? Pomodoro.RESET_SIMPLE_ICON
		                                          : props.timeStatus !== Pomodoro.STATE_PLAY
		                                            ? Pomodoro.PLAY_ICON
		                                            : Pomodoro.PAUSE_ICON;
		return <li id={ typeButton } onClick={ handleClick }>
			{ icon }
		</li>
	}
	
	/**
	 * <h2>handleClick</h2>
	 * Response for each component behavior
	 *
	 * @param event Default: 'click'
	 */
	const handleClick = event => {
		
		let isReset = event.target.id === 'reset',
		    action = isReset
		             ? 'reset'
		             : 'controls',
		    payload = isReset ? null : props.timeStatus === Pomodoro.STATE_PLAY
		               ? Pomodoro.STATE_STOP
		               : Pomodoro.STATE_PLAY,
		    method  = isReset ? 'resetService' : 'updateTimeStatus';
		
		
		console.log( '  |- -> click on:[', event.target.id, ']', isReset, action, payload );
		
		
		props[ method ]( action, payload );
	}
	
	const controls = setButton( 'control', false ),
	      reset    = setButton( 'reset', false );
	
	return (
			<footer id="timer-controls">
				<ul>
					{ controls }
					{ reset }
				</ul>
			</footer>
	);
}

export default TimerControl;