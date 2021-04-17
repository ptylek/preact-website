import styled from 'styled-components';

const StyledFooter = styled.footer`
	font-size: 1.3rem;
	text-align: center;
	letter-spacing: 0;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<p>Copyright 2021 by Pawel Tylek</p>
		</StyledFooter>
	);
};

export default Footer;
