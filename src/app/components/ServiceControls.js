import React         from "react";
import MomentControl from "../features/MomentControl";
import Pomodoro      from "../utils/Pomodoro";

/**
 * <h1>ServiceControls</h1>
 * This component allows to include a group of two components to control
 * the duration value in minutes of the sessions and break.
 *
 * @example
 * <ServiceControls activityTimes={ YourActivityTimesVariable }
 *            updateActivityTimes={ YourUpdateActivityTimesFunction }
 *                         unlock={ Locked when is playing }/>
 *
 * @param props {{activityTimes:object, updateActivityTimes:function, unlock:boolean}}
 * @returns {JSX.Element}
 * @constructor
 */
const ServiceControls = props => {
	return (
			<header id="session-controls">
				<MomentControl kind={ Pomodoro.TYPE_BREAK }
				               title={ Pomodoro.BREAK_LABEL }
				               unlock={ props.unlock }
				               activityTime={ props.activityTimes.break }
				               updateActivityTimes={ props.updateActivityTimes } />
				<MomentControl kind={ Pomodoro.TYPE_SESSION }
				               title={ Pomodoro.SESSION_LABEL }
				               unlock={ props.unlock }
				               activityTime={ props.activityTimes.session }
				               updateActivityTimes={ props.updateActivityTimes } />
			</header>
	);
}

export default ServiceControls;