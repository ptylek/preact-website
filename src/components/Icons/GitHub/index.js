const GitHubIcon = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			aria-labelledby='githubAlt'
			role='img'
		>
			<title id='githubAlt'>{props.alt}</title>
			<path d='M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zm-4.5 19.6c-.4 0-.5-.2-.5-.4V17a2 2 0 00-.6-1.5c1.8-.2 3.7-.8 3.7-4a3 3 0 00-.8-2c0-.3.3-1-.1-2.2 0 0-.7-.2-2.2.8a7.6 7.6 0 00-4 0c-1.5-1-2.2-.8-2.2-.8-.4 1.1-.2 2 0 2.1a3 3 0 00-.9 2.2c0 3 1.9 3.7 3.6 4-.2.1-.4.5-.5 1-.4.2-1.6.6-2.3-.7 0 0-.4-.7-1.2-.8 0 0-.8 0 0 .5 0 0 .4.2.8 1.2 0 0 .5 1.4 2.7 1v1.4c0 .2-.1.5-.5.4a8 8 0 115 0z' />
		</svg>
	);
};

export default GitHubIcon;
