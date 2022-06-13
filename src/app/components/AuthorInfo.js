import React from "react";

/**
 * <h1>AuthorInfo</h1>
 * This component provides a Header Title to the APP.
 *
 * Add the Author Information in the properties
 * @example
 * const authorInfo = {
 *   name : 'your name',
 *   url  : 'https://example.com/yourID',
 *   label: '@yourID'
 * }
 * @example
 * <AuthorInfo authorInfo={ YourAuthorInfoVariable }/>
 *
 * @param props {{authorInfo:{name: string, label: string, url: string}}}
 * @returns {JSX.Element}
 * @constructor
 */
const AuthorInfo = ( props ) => {
	return (
			<footer id="author">
				By{ " " }
				<a href={props.authorInfo.url}
				   name={props.authorInfo.name}
				   target="_blank"
				   rel="noreferrer">
					{ props.authorInfo.label }
				</a>
			</footer>
	);
};

export default AuthorInfo;