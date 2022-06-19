/**
 * <h1>ExtraData</h1>
 *
 * Utility
 *
 * I used this class to handle a set of properties,
 * May be looks redundant, but is a good practices way
 * to handle and protect data.
 *
 * REMEMBER: elements marked with a # are #private
 */
export default class ExtraData {
	/**
	 * <h3>#appTitle</h3>
	 * Contains the app title
	 *
	 * @private
	 * @type {{extra: string, main: string}}
	 */
	static #appTitle     = {
		main : '25x5',
		extra: 'Clock'
	}
	/**
	 * <h3>#appTitle</h3>
	 * Contains information about the autor.
	 *
	 * @private
	 * @type {{default: string, github: {id: string, url: string}, name: string, instagram: {id: string, url: string}}}
	 */
	static #appAuthor    = { // default: github
		name     : 'J. A. Mendez',
		default  : 'github',
		github   : {
			id : 'jam65st',
			url: 'https://github.com/jam65st/'
		},
		instagram: {
			id : 'jam65st',
			url: 'https://instagram.com/testandfails'
		}
	}
	static #appExternals = {
		alarm: {
			url: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav',
			id : 'beep'
		}
	}
	
	/**
	 * <h3>getProjectTitle</h3>
	 * Return the application title as JSX h1 element;
	 * @example
	 * { ExtraData.getProjectTitle() }
	 *
	 * @returns {JSX.Element}
	 */
	static getProjectTitle     = () => {
		return <h1>
			<strong>{ ExtraData.#appTitle.main }</strong> { ExtraData.#appTitle.extra }
		</h1>;
	}
	/**
	 * <h3>getProjectAutor</h3>
	 * Return information about the author: name, url, and label(id)
	 * @example
	 * ExtraData.getProjectAuthor();
	 * // returns stored data related to GitHub
	 * @example
	 * ExtraData.getProjectAuthor( 'instagram' );
	 * // returns stored data related to instagram
	 *
	 * @param provider {string} Default: 'github'
	 * @returns {{name: string, label: string, url: string}}
	 */
	static getProjectAuthor    = ( provider = 'github' ) => {
		return {
			name : ExtraData.#appAuthor.name,
			url  : ExtraData.#appAuthor[ provider ].url,
			label: `@${ ExtraData.#appAuthor[ provider ].id }`
		}
	}
	/**
	 * <h3>getExternalResource</h3>
	 * Return information of any resource included ond their details
	 * @example
	 * ExtraData.getExternalResource('alarm');
	 * // Return id and url of a sound piece related to an alarm.
	 *
	 * @param kind {string} Required, NO Default
	 * @returns {*}
	 */
	static getExternalResource = ( kind ) => {
		if ( !ExtraData.#appExternals || !ExtraData.#appExternals[ kind ] ) return;
		return ExtraData.#appExternals[ kind ];
	}
}