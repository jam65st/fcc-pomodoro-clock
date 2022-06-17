import React           from "react";
import ServiceControls from "./ServiceControls";
import TimeUtils       from "../utils/TimeUtils";
import TimerControl    from "../features/TimerControl";

/**
 * <h1>Service</h1>
 * This component contains the ServiceControls, TimerControls,
 * and the DisplayReader.
 *
 * @example
 * <Service activityTimes={ YourActivityTimesObjectVariable }
 *           resetService={ YourUpdateResetFunction }
 *              timeLabel={ YourTimeLabelVariable }
 *             timeStatus={ YourTimeStatusVariable }
 *                  timer={ YourTimerValueVariable }
 *       updateTimeStatus={ YourUpdateTimeStatusFunction }
 *    updateActivityTimes={ YourUpdateActivityTimesFunction }/>
 *
 * @param props {{lengths:object, resetService:function, timeLabel:string,
 *     timeStatus:string, timer:number, updateTimeStatus:string, updateLength:function }}
 * @constructor
 */
const Service = ( props ) => {
	return (
			<main id="info">
				{/** must require status **/ }
				<ServiceControls activityTimes={ props.activityTimes }
				                 unlock={ props.unlock }
				                 updateActivityTimes={ props.updateActivityTimes } />
				<br /> { props.timer }
				<br />
				<br /> { TimeUtils.ConvertNumberToMMSS( props.timer, 1000 ) }
				<br />
				<br /> { props.timeStatus } | { props.currentActivity }
				
				<TimerControl timeStatus={ props.timeStatus }
				              updateTimeStatus={ props.updateTimeStatus }
				              resetService={ props.resetService } />
			</main>
	);
}

export default Service;