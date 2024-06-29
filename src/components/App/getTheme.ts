import { createTheme } from '@mui/material/styles'

const getTheme = () => {
	const darkMode = localStorage.getItem('darkMode') || 'off'
	const mode = darkMode === 'on' ? 'dark' : 'light'
	const theme = createTheme({
		palette: {
			background: {
				default: mode === 'light' ? '#fff' : '#121212'
			},
			mode
		},
		typography: {
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"'
			].join(',')
		}
	})
	theme.palette.background.paper = mode === 'light' ? '#fff' : '#333'
	theme.palette.background.default =
		mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]
	return theme
}

export default getTheme
