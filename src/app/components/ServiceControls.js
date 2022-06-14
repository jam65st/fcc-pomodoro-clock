import React    from "react";
import MomentControl from "../features/MomentControl";
import Pomodoro from "../utils/Pomodoro";

const ServiceControls = props => {
	return (
			<header id="session-controls">
				<MomentControl  kind={ Pomodoro.TYPE_BREAK }
				               title={ Pomodoro.BREAK_TITLE }
				        activityTime={ props.activityTimes.break }
				 updateActivityTimes={ props.updateActivityTimes }/>
				<MomentControl  kind={ Pomodoro.TYPE_SESSION }
				               title={ Pomodoro.SESSION_TITLE }
				        activityTime={ props.activityTimes.session }
				 updateActivityTimes={ props.updateActivityTimes }/>
			</header>
	);
}

export default ServiceControls;