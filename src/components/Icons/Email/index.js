const EmailIcon = (props) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' aria-labelledby='emailAlt' role='img'>
			<title id='emailAlt'>{props.alt}</title>
			<rect width='512' height='512' rx='15%'/>
			<rect width='356' height='256' x='78' y='128' fill='white' rx='8%'/>
			<path fill='none' stroke='black' stroke-width='20' d='M434 128L269 292c-7 8-19 8-26 0L78 128m0 256l129-128m227 128L305 256'/>
		</svg>
	)
}

export default EmailIcon;
