import Helmet from 'preact-helmet';

const WebsiteHelmet = () => {
	return (
		<Helmet
			title="Pawel Tylek - frontend developer"
			meta={[
				{name: 'keywords', content: 'paweł tylek, pawel tylek, ptylek, frontend, front-end, magento, dev, developer, kraków'},
				{name: 'description', content: 'Frontend and Certified Magento 2 developer based in Cracow, PL.'},
				{name: 'author', content: 'Paweł Tylek'},
				{name: 'theme-color', content: '#d6d6d6'},
				{name: 'msapplication-TileColor', content: '#d6d6d6'},
				{name: 'msapplication-config', content: '/assets/favicons/browserconfig.xml'},
				{name: 'google-site-verification', content: 'wSIJ9WlT_uhwOy3Q54cQMPURXfs8YtOG1qrOr7GLqvg'},
				{property: 'og:title', content: 'Pawel Tylek - frontend developer'},
				{property: 'og:description', content: 'Frontend and Certified Magento 2 developer based in Cracow, PL.'},
				{property: 'og:type', content: 'website'},
				{property: 'og:site_name', content: 'Pawel Tylek - frontend developer'},
				{property: 'og:image', content: '/assets/favicons/logo-og.png'},
				{property: 'og:image:url', content: '/assets/favicons/logo-og.png'},
				{property: 'og:image:type', content: 'image/png'},
				{property: 'og:image:width', content: '1200'},
				{property: 'og:image:height', content: '628'},
				{property: 'og:image:alt', content: 'article'},
				{property: 'og:url', content: 'http://ptylek.com'},
				{name: 'twitter:card', content: 'summary_large_image'},
				{name: 'twitter:description', content: 'Frontend and Certified Magento 2 developer based in Cracow, PL.'},
				{name: 'twitter:image:src', content: '/assets/favicons/logo-og.png'},
				{name: 'twitter:title', content: 'Pawel Tylek - frontend developer'},
				{name: 'twitter:url', content: 'http://ptylek.com'},
			]}
			link={[
				{rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/apple-touch-icon.png'},
				{rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicons/favicon-32x32.png'},
				{rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicons/favicon-16x16.png'},
				{rel: 'manifest', href: '/manifest.json'},
				{rel: 'mask-icon', href: '/assets/favicons/safari-pinned-tab.svg', color: '#808080'},
				{rel: 'shortcut icon', href: '/assets/favicon.ico'},
				{rel: 'preconnect', href: 'https://fonts.gstatic.com'},
				{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400&display=swap'}
			]}
		/>	
	)
}

export default WebsiteHelmet;