const Link = (props) => {
	const img = props.children ? (
		props.children
	) : (
		<img
			src={props.src}
			alt={props.alt}
			width={props.width}
			height={props.height}
		/>
	);

	return (
		<a href={props.url} rel='noreferrer noopener'>
			{img}
		</a>
	);
};

export default Link;
