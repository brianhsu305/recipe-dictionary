import { Link } from 'react-router-dom';

const Recipe = (props) => {
	const myEncodedUri = encodeURIComponent(props.dish.uri);

	return (
		<div className='bg-white my-4 flex gap-x-2 items-center rounded md:flex-col'>
			<img src={props.dish.image} alt='dish' className='rounded w-3/12' />
			<div className='text-black text-left flex-1 md:flex-auto'>
				<p className='font-bold'>{props.dish.label}</p>
				<p className=''>For {props.dish.yield} servings</p>
				<p><span className='font-bold'>{(props.dish.calories / props.dish.yield).toFixed(0)}</span> cal per serving</p>
			</div>

			<Link
				to={`/recipe/${myEncodedUri}`} className='mr-2 p-2 bg-emerald-300 rounded'
			>
				<button className=''>More</button>
			</Link>
		</div>
	);
};

export default Recipe;
