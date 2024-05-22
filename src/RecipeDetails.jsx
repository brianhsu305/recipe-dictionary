import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const RecipeDetails = (props) => {
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
		<div className=''>
			{result === undefined || Object.keys(result).length === 0 ? (
				<div>Refresh the page after 1 minute</div>
			) : (
				<div>
					<section className='' id='main'>
						<div className='mb-5'>
							{/* <Link to='/'> */}
								<button className='rounded bg-red-400 p-2' onClick={() => navigate(-1)}>Back</button>
							{/* </Link> */}
							<h2 className='text-4xl font-bold mt-5'>{result.label}</h2>
						</div>

						<div className='border-100'>
							<img src={result.image} alt='dish' />
							<div className=''>
								<h5 className='font-bold text-2xl my-3'>Health Labels</h5>
								<p className='flex flex-wrap'>
									{result.healthLabels.map((item, i) => (
										<span key={i} className='rounded bg-emerald-300 m-2 p-2'>{item}</span>
									))}
								</p>
							</div>
						</div>
					</section>
					<section className='ingredients'>
						<h5 className='font-bold text-2xl my-3'>Ingredients for {result.yield} serving&#40;s&#41;</h5>
						{result.ingredientLines.map((item, i) => (
							<p key={i}>{item}</p>
						))}
					</section>
					<section className='nutrients'>
						<h5 className='font-bold text-2xl my-3'>Nutrients &#40;per serving&#41;</h5>
						<p className='font-bold'>{(result.calories / result.yield).toFixed(0)} calories</p>
						<div className='flex flex-wrap'>
							{Object.values(result.totalNutrients).map((item, i) => (
								<span key={i} className='rounded bg-emerald-300 m-2 p-2'>
									{item.label} {(item.quantity / result.yield).toFixed(0)}
									{item.unit}
								</span>
							))}
						</div>
					</section>
				</div>
			)}
		</div>
	);
};
export default RecipeDetails;
