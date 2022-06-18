import React     from "react";
import TimeUtils from "../utils/TimeUtils";
import Pomodoro  from "../utils/Pomodoro";

/**
 * <h1>DisplayReader</h1>
 * This component shows the remaining time on #time-left element.
 * [ReadONLY]
 *
 * @example
 * <DisplayReader currentActivity={ YourCurrentActivityVariable }
 *                     timer={ theCurrentTimeLeftVariable }/>
 *
 * @param props {{timer:number, timeStatus:function}}
 * @constructor
 */
const DisplayReader = ( props ) => {
	const timer  = props.timer;
	let colorize = timer <= Pomodoro.DEFAULT_MIN_CHANGE
	               ? { color: '#8b0000' }
	               : timer <= Pomodoro.DEFAULT_MAX_CHANGE
	                 ? { color: '#ffbf00' } : {};
	
	return (
			<main id="display">{/* status={ props.timeStatus } */}
				<h2 id="timer-label" className="h3">
					{ props.currentActivity.toLowerCase() }
				</h2>
				<div id="time-left" style={ colorize }>
					{ TimeUtils.ConvertNumberToMMSS( props.timer, 1000 ) }
				</div>
			</main>
	);
}

export default DisplayReader;