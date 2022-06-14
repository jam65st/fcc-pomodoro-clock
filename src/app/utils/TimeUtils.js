const TimeUtils = {
	ConvertNumberToMMSS: ( timer, ms = 1 ) => {
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

export default TimeUtils;

/**
 * ana@tonka.co T0NK@Ut1l T0NK@Ut1l
 */