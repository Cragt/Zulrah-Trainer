import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import getTheme from './getTheme'
import Trainer from '../Trainer/Trainer'

const App: React.FC = () => {
	const theme = getTheme()

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles
				styles={{
					'::-webkit-scrollbar': {
						background: theme.palette.mode === 'dark' ? '#282828' : '#eee'
					},
					'::-webkit-scrollbar-thumb': {
						background: theme.palette.mode === 'dark' ? '#636363' : '#ddd',
						borderRadius: 2
					},
					'::-webkit-scrollbar-thumb:hover': {
						background: theme.palette.mode === 'dark' ? '#999' : '#999'
					}
				}}
			/>
			<CssBaseline />
			<Trainer />
		</ThemeProvider>
	)
}

export default App
