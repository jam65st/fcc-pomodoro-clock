import React           from "react";
import ServiceControls from "./ServiceControls";
import TimerControl    from "../features/TimerControl";
import DisplayReader   from "./DisplayReader";

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
 *     timeStatus:string, timer:number, updateTimeStatus:function, updateLength:function }}
 * @constructor
 */
const Service = ( props ) => {
	return (
			<main id="info" aria-label={props.timeStatus}>
				{/** must require status **/ }
				<ServiceControls activityTimes={ props.activityTimes }
				                 unlock={ props.unlock }
				                 updateActivityTimes={ props.updateActivityTimes } />
				
				<DisplayReader currentActivity={props.currentActivity}
				               timer={ props.timer }/>
				               
				
				<TimerControl timeStatus={ props.timeStatus }
				              updateTimeStatus={ props.updateTimeStatus }
				              resetService={ props.resetService } />
			</main>
	);
}

export default Service;