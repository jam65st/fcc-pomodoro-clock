import React from "react";

/**
 * <h1>BeepAlarm</h1>
 * This component is HIDE, but contains your alarm, without it,
 * you can't hear when a moment (break | session) is finished.
 *
 * @example
 * const beepAlarm = {
 *   url: 'https://example.com/yourID',
 *   id : 'beep'
 * }
 * @example
 * <BeepAlarm alarm={ YourBeepAlarmVariable }/>
 *
 * @param props {{alarm:{id: string, url: string}}}
 * @returns {JSX.Element}
 * @constructor
 */
const BeepAlarm = ( props ) => {
	return (
			<audio
					id={ props.alarm.id }
					preload="auto"
					src={ props.alarm.url }
			/>
	);
};

export default BeepAlarm;