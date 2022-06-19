import React    from "react";
import Pomodoro from "../utils/Pomodoro";

/**
 * <h1>MomentControl</h1>
 * This component provides a control to increase
 * or decrease an important value in the app.
 *
 * @example
 * <MomentControl title={ YourTitleVariable }
 *                 kind={ breaks || session }
 *               unlock={ !isPlaying }
 *         activityTime={ YourActivityTimeVariable }
 *  updateActivityTimes={ YourUpdateActivityTimesFunction }/>
 *
 * @param props {{kind:string, title:string, activityTime:number, updateActivityTimes:function, unlock:boolean }}
 * @returns {JSX.Element}
 * @constructor
 */
const MomentControl = props => {
	const min  = Pomodoro.MINIMUM_TIME;
	const max  = Pomodoro.MAXIMUM_TIME;
	const time = props.activityTime;
	
	/**
	 * <h2>setButton</h2>
	 * Creates or updates a button according to the received properties
	 *
	 * @example
	 * const _increment = setButton( 'up', time < max );
	 *
	 * @param type {string} Options: 'up' || 'down'
	 * @param active {boolean}
	 * @returns {JSX.Element} Interactive element that acts such as button
	 */
	const setButton = ( type, active ) => {
		const typeButton = type === 'up' ? 'increment' : 'decrement';
		return <li id={ `${ props.kind }-${ typeButton }` }
		           onClick={ active ? handleClick : null }
		           className={ active ? null : "disabled" }>
			{ Pomodoro[ `${ typeButton.toUpperCase() }_ICON` ] }
		</li>
	}
	
	/**
	 * <h2>handleClick</h2>
	 * Response for each component behavior
	 *
	 * @param event Default: 'click'
	 */
	const handleClick = event => {
		let action  = event.target.id.split( '-' )[ 1 ],
		    payload = action === 'increment' ? 1 : -1;
		action      = props.kind + '/' + action;
		props.updateActivityTimes( action, payload );// Trigger action ( action, payload );
	}
	
	// Defining Buttons
	const _increment = setButton( 'up', time < max && props.unlock ),
	      _decrement = setButton( 'down', time > min && props.unlock );
	
	
	return (
			<div id={ props.kind }>
				<h3 id={ `${ props.kind }-label` }
				    className="h4">
					{ props.title }
				</h3>
				<ul id={ `${ props.kind }-time` }>
					{ _increment }
					<li id={ `${ props.kind }-length` }>{ props.activityTime }</li>
					{ _decrement }
				</ul>
			</div>
	)
}

export default MomentControl;