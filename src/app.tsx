import ReactDOM from 'react-dom'
import App from './components/App/App'

export const initialize = async () => {
	ReactDOM.render(<App />, document.getElementById('root'))
}

initialize()
