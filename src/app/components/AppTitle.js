import React from "react";

/**
 * <h1>AppTitle</h1>
 * This component provides a Header Title to the APP.
 *
 * Add the App title in the properties
 * @example
 * <AppTitle title={ YourTitleVariable }/>
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const AppTitle = ( props ) => {
	const title = props.title;
	return <header id="title">{ title }</header>;
};

export default AppTitle;