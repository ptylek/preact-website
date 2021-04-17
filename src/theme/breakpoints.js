const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '480px',
	tablet: '768px',
	laptop: '1024px',
};

const breakpoint = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
};

export default breakpoint;
