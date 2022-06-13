// noinspection JSUnusedLocalSymbols
/**
 * <h1>Pomodoro</h1>
 *
 * The Pomodoro Class is a Dictionary utility that can be understood
 * as a parameter list, also as reserved words to improve this app.
 */
export default class Pomodoro {
	
	/**
	 * <h2>BREAK</h2>
	 */
	// eslint-disable-next-line no-unused-vars
	#break = 0;
	
	/**
	 * <h3>TYPE_BREAK</h3>
	 *
	 * Constant with the default value of the session
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {string} Default: break
	 */
	static TYPE_BREAK   = "break";
	
	/**
	 * <h3>BREAK_LABEL</h3>
	 *
	 * Constant with the default text of the #break-label
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {string} Default: Break Length
	 */
	static BREAK_LABEL = "Break Length";
	
	/**
	 * <h3>BREAK_TITLE</h3>
	 *
	 * Constant with the default text of the #break-label
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {string} Default: Break
	 */
	static BREAK_TITLE = "Break";
	
	/**
	 * <h3>BREAK_TIME</h3>
	 *
	 * Constant with the default time (in minutes) of breaks moment.
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {number} Default: 5
	 */
	static BREAK_TIME = 5;// 5
	
	
	/**
	 * <h2>SESSION</h2>
	 */
	// eslint-disable-next-line no-unused-vars
	#session = 0;
	
	/**
	 * <h3>TYPE_SESSION</h3>
	 *
	 * Constant with the default value of the session
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {string} Default: session
	 */
	static TYPE_SESSION = "session";
	
	/**
	 * <h3>SESSION_LABEL</h3>
	 *
	 * Constant with the default text of the #session-label
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {string} Default: Session
	 */
	static SESSION_LABEL = "Session Length";
	
	/**
	 * <h3>SESSION_TITLE</h3>
	 *
	 * Constant with the default name of the #session-label
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {string} Default: Session
	 */
	static SESSION_TITLE = "Session";
	
	/**
	 * <h3>SESSION_TIME</h3>
	 *
	 * Constant with the default time (in minutes) of sessions moment.
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {number} Default: 25
	 */
	static SESSION_TIME = 25;// 25
	
	
	/**
	 * <h2>STATES</h2>
	 */
	// eslint-disable-next-line no-unused-vars
	#states = 0;
	
	/**
	 * <h3>STATE_STOP</h3>
	 *
	 * @type {string} Default: stopped
	 */
	static STATE_STOP = "stopped";
	
	/**
	 * <h3>STATE_PLAY</h3>
	 *
	 * @type {string} Default: playing
	 */
	static STATE_PLAY = "playing";
	
	/**
	 * <h3>STATE_PAUSE</h3>
	 *
	 * @type {string} Default: paused
	 */
	static STATE_PAUSE = "paused";
	
	/**
	 * <h3>STATE_FINISH</h3>
	 *
	 * @type {string} Default: finished
	 */
	static STATE_FINISH = "finished";
	
	/**
	 * <h3>STATE_SWAP</h3>
	 *
	 * @type {string} Default: swap
	 */
	static STATE_SWAP = "swap";
	
	
	/**
	 * <h2>RESET EVENTS</h2>
	 */
	// eslint-disable-next-line no-unused-vars
	#reset = 0;
	
	/**
	 * <h3>RESET_HARD</h3>
	 *
	 * Constant value used to reset all values to their DEFAULT values.
	 * It is used by Default.
	 *
	 * @type {string} hard
	 */
	static RESET_HARD = "hard";
	
	/**
	 * <h3>RESET_SIMPLE</h3>
	 *
	 * Constant value used to reset all values to their USER values.
	 * (#session_length, #break_length, #time_left)
	 * It is unused, is a future feature ONLY.
	 *
	 * @type {string} simple
	 */
	static RESET_SIMPLE = "simple";
	
	/**
	 * <h2>ICONS</h2>
	 * Default Icon values from Google Material Icons
	 *
	 */
	// eslint-disable-next-line no-unused-vars
	#icons = 0;
	
	/**
	 * <h3>DECREMENT ICON</h3>
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {string}
	 */
	static DECREMENT_ICON    = "expand_more";
	
	/**
	 * <h3>INCREMENT ICON</h3>
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {string}
	 */
	static INCREMENT_ICON    = "expand_less";
	
	/**
	 * <h3>PLAY ICON</h3>
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {string}
	 */
	static PLAY_ICON         = "play_circle_outline";
	
	/**
	 * <h3>PAUSE ICON</h3>
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {string}
	 */
	static PAUSE_ICON        = "pause_circle_outline";
	
	/**
	 * <h3>RESET HARD ICON</h3>
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {string}
	 */
	static RESET_HARD_ICON   = "autorenew";
	
	/**
	 * <h3>RESET SIMPLE ICON</h3>
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {string}
	 */
	static RESET_SIMPLE_ICON = "restore";
	
	/**
	 * <h3>DECREMENT ICON</h3>
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {function(*): string}
	 */
	static SwapPlayingIcons = kind => kind === Pomodoro.STATE_PLAY
	                                  ? Pomodoro.PAUSE_ICON : Pomodoro.PLAY_ICON;
	
	
	/**
	 * <h3>DECREMENT ICON</h3>
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * @type {function(*): string}
	 */
	static SwapResetIcons = kind => kind === Pomodoro.RESET_HARD
	                                ? Pomodoro.RESET_SIMPLE_ICON : Pomodoro.RESET_HARD_ICON;
	
	
	/**
	 * <h2>DEFAULT TIMERS</h2>
	 */
	// eslint-disable-next-line no-unused-vars
	#timer = 5;
	
	/**
	 * <h3>DEFAULT_TIMER</h3>
	 *
	 * Default Value for the Timer in seconds (session time is in minutes,
	 * it must convert to second at multiply by 60)
	 *
	 * <strong>User Story #6</strong>
	 *
	 * I can see an element with a corresponding id="session-length",
	 * which by default displays a value of 25.
	 *
	 * @type {number}
	 */
	static DEFAULT_TIMER = Pomodoro.SESSION_TIME * 60;
	
	/**
	 * <h3>MINIMUM_TIME</h3>
	 *
	 * The minimum time that you must apply to session or breaks
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * "I should not be able to set a session or break length to <= 0."
	 *
	 * @type {number} Default: 0
	 */
	static MINIMUM_TIME = 0;
	
	/**
	 * <h3>MAXIMUM_TIME</h3>
	 *
	 * The maximum time that you must apply to session or breaks
	 *
	 * <strong>User Story #:</strong> TODO: Add related User Story
	 *
	 * "I should not be able to set a session or break length to > 60."
	 *
	 * @type {number}
	 */
	static MAXIMUM_TIME = 60;
	
	// TODO: When remember why these, then must be updated
	
	/**
	 * <h3>DEFAULT_MAX_CHANGE</h3>
	 *
	 * The maximum time that you must apply to update color
	 *
	 * <strong>User Story #17:</strong>
	 *
	 * "I should not be able to set a session or break length to > 60."
	 *
	 * @type {number}
	 */
	static DEFAULT_MAX_CHANGE = 60;
	
	/**
	 * <h3>DEFAULT_MIN_CHANGE</h3>
	 *
	 * The maximum time that you must apply to update color RED
	 *
	 * <strong>User Story #17:</strong>
	 *
	 * "I should not be able to set a session or break length to > 60."
	 *
	 * @type {number}
	 */
	static DEFAULT_MIN_CHANGE = 30;
	
}