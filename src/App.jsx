import Home from './Home';
import Results from './Results';
import RecipeDetails from './RecipeDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'query/:query',
		element: <Results />,
	},
	{
		path: 'recipe/:id',
		element: <RecipeDetails />,
	},
]);

const App = () => {
	return (
		<div className='min-h-screen p-4 flex items-center justify-center'>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
