import React     from "react";
import TimeUtils from "../utils/TimeUtils";
import Pomodoro  from "../utils/Pomodoro";

/**
 * <h1>DisplayReader</h1>
 * This component shows the remaining time on #time-left element.
 * [ReadONLY]
 *
 * @example
 * <DisplayReader timeStatus={ YourCurrentTimeStatus }
 *           currentActivity={ YourCurrentActivityVariable }
 *                     timer={ theCurrentTimeLeftVariable }/>
 *
 * @param props {{timeStatus:string, currentActivity:string, timer:number}}
 * @constructor
 */
const DisplayReader = ( props ) => {
	const timer  = props.timer;
	let colorize = timer === 0
	               ? { color: '#ff0000' }
	               : timer <= Pomodoro.DEFAULT_MIN_CHANGE
		               ? { color: '#bb8800' }
		               : timer <= Pomodoro.DEFAULT_MAX_CHANGE
		                 ? { color: '#ffbf00' } : {};
	
	return (
			<main id="display" status={ props.timeStatus }>
				<h2 id="timer-label" className="h3">
					{ props.currentActivity }
				</h2>
				<div id="time-left" style={ colorize }>
					{ TimeUtils.ConvertNumberToMMSS( timer, 1000 ) }
				</div>
			</main>
	);
}

export default DisplayReader;