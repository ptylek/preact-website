import { Router } from 'preact-router';
import 'index.css';

import WebsiteHelmet from 'services/helmet';

import Header from 'components/Header';
import Home from 'containers/Home';
import Footer from 'components/Footer';

import { ThemeProvider } from 'styled-components';
import { themeColors, basicColors } from 'theme/colors';

const colorsArray = Object.values(themeColors);
const mainColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
const theme = {
	main: mainColor,
	width: '70rem',
	header: basicColors.white,
	border: basicColors.alto,
};

const App = () => {
	return (
		<div id='app'>
			<ThemeProvider theme={theme}>
				<WebsiteHelmet />
				<Header />
				<Router>
					<Home default path='/' />
				</Router>
				<Footer />
			</ThemeProvider>
		</div>
	);
};

export default App;
