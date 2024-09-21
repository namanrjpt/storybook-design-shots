import TreeComponent from './Pages/TreeComponent.jsx';
import Home from './Pages/Home.jsx';
import Test from './Pages/Test.jsx';

import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/card'
					element={<TreeComponent />}
				/>
				<Route
					path='/test'
					element={<Test />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
