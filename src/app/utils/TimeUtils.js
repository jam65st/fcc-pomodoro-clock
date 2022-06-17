/**
 * <h1>TimeUtils</h1>
 * Contains utilities to fix or perform the time handling and representation
 */
export default class TimeUtils {
	/**
	 * <h2>ConvertNumberToHHMMSS</h2>
	 *
	 * @example
	 * let timer = <span>{ ConvertNumbersToHHMMSS( 96400, 1000 ) }</span>
	 * // returns: 24:40:00
	 * @example
	 * let timer = <span>{ ConvertNumbersToHHMMSS( 86400, 1000 ) }</span>
	 * // returns: 24:00:00
	 * @example
	 * let timer = <span>{ ConvertNumbersToHHMMSS( 10400, 1000 ) }</span>
	 * // returns: 02:53:20
	 *
	 * @param timer The numeric time value to convert in seconds or milliseconds
	 * @param ms Default: 1 This feature allows you to add a multiplier to work
	 * with milliseconds; in this case you must add the value of 1000
	 * @returns {string} return your time value in hh:mm:ss format
	 * @constructor
	 */
	static ConvertNumberToHHMMSS = ( timer, ms = 1 ) => {
		const time = new Date( timer * ms );
		let dd     = time.getUTCDay(),
		    hh     = time.getUTCHours(),
		    mm     = time.getUTCMinutes(),
		    ss     = time.getUTCSeconds();
		
		if ( dd > 0 ) hh += dd * 24;
		
		return [
			String( hh ).padStart( 2, '0' ),
			String( mm ).padStart( 2, '0' ),
			String( ss ).padStart( 2, '0' ),
		].join( ':' )
	}
	/**
	 * <h2>ConvertNumberToMMSS</h2>
	 *
	 * @param timer The numeric time value to convert in seconds or milliseconds
	 * @param ms Default: 1 This feature allows you to add a multiplier to work
	 * with milliseconds; in this case you must add the value of 1000
	 * @returns {string} return your time value in mm:ss format
	 * @constructor
	 */
	static ConvertNumberToMMSS   = ( timer, ms = 1 ) => {
		const time = new Date( timer * ms );
		let hh     = time.getUTCHours(),
		    mm     = time.getUTCMinutes(),
		    ss     = time.getUTCSeconds();
		
		if ( hh > 0 ) mm += hh * 60;
		
		return [
			String( mm ).padStart( 2, '0' ),
			String( ss ).padStart( 2, '0' ),
		].join( ':' )
	}
}