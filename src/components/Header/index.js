import styled from 'styled-components';
import breakpoint from 'theme/breakpoints';

const StyledHeader = styled.header`
	background: ${(props) => props.theme.main};
	padding: 2.5rem 0;
`;

const StyledTitle = styled.h1`
	color: ${(props) => props.theme.header};
	font-size: 5vw;
	font-weight: 400;
	margin: 0 auto;
	max-width: ${(props) => props.theme.width};
	padding: 0 1.5rem;

	@media ${breakpoint.tablet} {
		font-size: 4rem;
		margin: 2.5rem auto;
	}

	@media ${breakpoint.laptop} {
		padding: 0;
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<StyledTitle>
				Paweł Tylek, frontend developer
				<br />
				based in Kraków, PL
			</StyledTitle>
		</StyledHeader>
	);
};

export default Header;
