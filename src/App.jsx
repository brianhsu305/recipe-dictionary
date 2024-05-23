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
		<div className='flex min-h-screen flex-col justify-center px-10 bg-emerald-100'>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
