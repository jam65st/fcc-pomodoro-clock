import React           from "react";
import ServiceControls from "./ServiceControls";

import TimeUtils from "../utils/TimeUtils";

const Service = props => {
	return (
			<main id="info">
				{/** must require status **/}
				<ServiceControls activityTimes={ props.activityTimes }
				           updateActivityTimes={ props.updateActivityTimes }/>
				<br/> { props.timer } { TimeUtils.ConvertNumberToMMSS( props.timer, 1000 ) }
			</main>
	);
}

export default Service;