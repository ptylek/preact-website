import styled from 'styled-components';
import breakpoint from 'theme/breakpoints';

import ImageLink from 'components/ImageLink';

import { content, links } from 'content';

import aceJsBadge from 'assets/icons/ace-javascript.png';
import aceFeBadge from 'assets/icons/ace-frontend.png';
import maintainerIcon from 'assets/icons/maintainer.png';

import GitHubIcon from 'components/icons/Github';
import LinkedInIcon from 'components/icons/LinkedIn';
import EmailIcon from 'components/icons/Email';

const StyledMain = styled.main`
	margin: 2.5rem auto;
	max-width: ${(props) => props.theme.width};
	padding: 0 1.5rem;

	@media ${breakpoint.laptop} {
		margin: 5rem auto;
	}

	@media ${breakpoint.laptop} {
		border-left: 1px solid ${(props) => props.theme.border};
		padding: 0 4.5rem;
	}

	p {
		font-size: 1.4rem;

		@media ${breakpoint.tablet} {
			font-size: 2.2rem;
		}
	}
`;

const StyledMagentoImages = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin: 4rem 0 3.5rem;

	@media ${breakpoint.tablet} {
		align-items: flex-end;
		margin: 1.5rem 0 3.5rem;
	}
`;

const StyledCertificates = styled.div`
	display: flex;
	flex-direction: column;

	@media ${breakpoint.mobileL} {
		flex-direction: row;
	}

	img {
		width: 13.7rem;
		height: 5rem;

		@media ${breakpoint.tablet} {
			width: 19.2rem;
			height: 7rem;
		}
	}

	a + a {
		margin: 2rem 0 0;

		@media ${breakpoint.mobileL} {
			margin: 0 0 0 2rem;
		}

		@media ${breakpoint.tablet} {
			margin: 0 0 0 4rem;
		}
	}
`;

const StyledMaintainer = styled.div`
	img {
		width: 10.1rem;
		height: 7rem;

		@media ${breakpoint.tablet} {
			width: 12.9rem;
			height: 9rem;
		}
	}
`;

const StyledSocials = styled.div`
	display: flex;
	justify-content: flex-start;
	margin: 2.5rem 0 0;

	@media ${breakpoint.tablet} {
		justify-content: flex-end;
		margin: 4rem 0 3rem;
	}

	svg {
		width: 4rem;
		height: 4rem;

		@media ${breakpoint.tablet} {
			width: 5rem;
			height: 5rem;
		}
	}

	a {
		&:hover {
			svg path {
				fill: ${(props) => props.theme.main};
			}
		}

		&:first-child {
			&:hover {
				svg {
					path {
						fill: none;
						stroke: ${(props) => props.theme.main};
					}

					rect:nth-child(2) {
						fill: ${(props) => props.theme.main};
					}
				}
			}
		}
	}

	a + a {
		margin-left: 2rem;
	}
`;

const Home = () => (
	<StyledMain>
		<p>{content.greeting}</p>
		<p>{content.magento}</p>
		<StyledMagentoImages>
			<StyledCertificates>
				<ImageLink
					url={links.aceJs.url}
					src={aceJsBadge}
					alt={links.aceJs.alt}
					width='192'
					height='70'
				/>
				<ImageLink
					url={links.aceFe.url}
					src={aceFeBadge}
					alt={links.aceFe.alt}
					width='192'
					height='70'
				/>
			</StyledCertificates>
			<StyledMaintainer>
				<ImageLink
					url={links.maintainers.url}
					src={maintainerIcon}
					alt={links.maintainers.alt}
					width='129'
					height='90'
				/>
			</StyledMaintainer>
		</StyledMagentoImages>
		<p>{content.education}</p>
		<p>{content.software}</p>
		<p>{content.hobby}</p>
		<p>{content.social}</p>
		<StyledSocials>
			<ImageLink url={links.email.url}>
				<EmailIcon alt={links.email.alt} />
			</ImageLink>
			<ImageLink url={links.github.url}>
				<GitHubIcon alt={links.github.alt} />
			</ImageLink>
			<ImageLink url={links.linkedin.url}>
				<LinkedInIcon alt={links.linkedin.alt} />
			</ImageLink>
		</StyledSocials>
	</StyledMain>
);

export default Home;
