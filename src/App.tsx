import {Routes, Route} from 'react-router-dom'
import {DashboardPage, HomePage} from 'pages'

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage/>}/>
			<Route path="/dashboard" element={<DashboardPage/>}/>
		</Routes>
	)
}
