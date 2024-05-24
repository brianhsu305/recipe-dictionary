import SearchBar from './SearchBar';
import Recipe from './Recipe';
import { useParams, useLocation, Link } from 'react-router-dom';

const Results = (props) => {
	const { query } = useParams();
	const location = useLocation();

	const recipes = location.state.results;
	console.log(recipes);
	// const myEncodedUri = encodeURIComponent(props.dish.uri);
	return (
		// <div className='bg-white m-4 flex gap-x-2 items-center rounded md:flex-col'>
		// 	<img src={props.dish.image} alt='dish' className='rounded w-3/12' />
		// 	<div className='text-black text-left flex-1 md:flex-auto'>
		// 		<p className='font-bold'>{props.dish.label}</p>
		// 		<p className=''>
		//             For {props.dish.yield} servings
		// 		</p>
		// 		<p>{props.dish.calories.toFixed(0)} cal</p>
		// 	</div>

		// 	<Link to={`/recipes/${myEncodedUri}`} className='mr-2 p-2 bg-black rounded'>
		// 		<button className=''>More</button>
		// 	</Link>
		// </div>

		<div>
			<div className='flex gap-2 sticky top-0 pt-10 bg-emerald-100'>
				<SearchBar />
				<Link to='/'>
					<button className='bg-red-400 rounded p-2 font-bold hover:bg-red-800'>Back</button>
				</Link>
			</div>

			<h1 className='my-5'>
				Results for <span className='font-bold'>{query ? `${` ` + query}` : ''}</span>
			</h1>

			<div className='grid gap-3 md:grid-cols-2 md:grid-flow-row md:gap-5 lg:grid-cols-4'>
				{recipes.map((dish) => (
					<Recipe key={dish.recipe.url} dish={dish.recipe} />
				))}
			</div>
		</div>
	);
};

export default Results;
