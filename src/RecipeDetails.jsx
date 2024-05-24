import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const RecipeDetails = () => {
	const APP_ID = 'c2f2cb27';
	const APP_KEY = import.meta.env.VITE_KEY;

	const [result, setResult] = useState({});

	const { id } = useParams();
	const navigate = useNavigate();
	console.log(`recipeId: ${id}`);

	useEffect(() => {
		fetch(`https://api.edamam.com/search?r=${encodeURIComponent(id)}&app_id=${APP_ID}&app_key=${APP_KEY}`)
			.then((res) => res.json())
			.then((data) => {
				setResult(data[0]);
				console.log('data from recipe details: ' + data[0]);
			});
	}, []);

	return (
		<div className='min-h-screen flex justify-center items-center py-10'>
			{result === undefined || Object.keys(result).length === 0 ? (
				<div>Refresh the page after 1 minute</div>
			) : (
				<div>
					<button className='rounded bg-red-400 p-2 font-bold hover:bg-red-800' onClick={() => navigate(-1)}>
						Back
					</button>
					<section>
						<h2 className='text-4xl font-bold my-5 title-font'>{result.label}</h2>
						<img src={result.image} alt='dish' />
					</section>
					
					<section>
						<h5 className='font-bold text-2xl my-3'>Ingredients for {result.yield} serving&#40;s&#41;</h5>
						{result.ingredientLines.map((item, i) => (
							<p key={i}>{item}</p>
						))}
					</section>
					<section>
						<h5 className='font-bold text-2xl my-3'>Nutrients &#40;per serving&#41;</h5>
						<div className='flex flex-col bg-white p-5'>
							<p className='font-bold text-2xl'>{(result.calories / result.yield).toFixed(0)} calories</p>

							{Object.values(result.totalNutrients).map((item, i) => (
								<p key={i} className='rounded flex justify-between'>
									<span className='font-bold'>{item.label} </span>
									<span className=''>
										{' '}
										{(item.quantity / result.yield).toFixed(0)} {item.unit}
									</span>
								</p>
							))}
						</div>
					</section>
					<section>
						<h5 className='font-bold text-2xl my-3'>Recipe Instruction</h5>
						<Link to={result.url} className='py-4  text-blue-600 font-bold uppercase hover:underline'>
							Check recipe instruction here
						</Link>
					</section>
					<section>
						<h5 className='font-bold text-2xl my-3'>Health Labels</h5>
						<p className='flex flex-wrap'>
							{result.healthLabels.map((item, i) => (
								<span key={i} className='rounded bg-emerald-300 m-1 p-2'>
									{item}
								</span>
							))}
						</p>
					</section>
				</div>
			)}
		</div>
	);
};
export default RecipeDetails;
