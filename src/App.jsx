import Home from './Pages/Home.jsx';

import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom';
import { routes } from './Routes.js';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				{routes.map((route) => {
					return (
						<Route
							key={route.id}
							path={route.path}
							element={<route.component />}
						/>
					);
				})}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
