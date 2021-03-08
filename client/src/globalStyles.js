import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	textarea, input, button, select { font-family: inherit; font-size: inherit; }
`;
 
export default GlobalStyle;