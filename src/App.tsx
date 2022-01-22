import React from 'react'
import logo from './logo.svg'
import './App.css'
import { ProjectList } from './screens/project-list'
import { LoginScreen } from './screens/login'
import { AppProviders } from './context'

function App() {
	return (
		<div className='App'>
			{/*<ProjectList></ProjectList>*/}
			<AppProviders>
				<LoginScreen></LoginScreen>
			</AppProviders>

		</div>

	)
}

export default App
