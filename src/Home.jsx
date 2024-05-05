import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';

const Home = () => {
	const APP_ID = 'c2f2cb27';
	const APP_KEY = '14be2a5ac3084a24d01dcf1b33431ce2';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuety] = useState('');

	//run whenever the item in array changes
	useEffect(() => {
		let searchqueue = query.length !== 0 ? query : 'chicken';
		fetch(`https://api.edamam.com/search?q=${searchqueue}&app_id=${APP_ID}&to=20&app_key=${APP_KEY}`)
			.then((res) => res.json())
			.then((data) => {
				setRecipes(data.hits);
				console.log(data.hits);
			});
	}, [query]);

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuety(search);
		setSearch('');
	};

	return (
		<div className='home container'>
			<form onSubmit={getSearch} className='search'>
				<input type='text' value={search} onChange={updateSearch} placeholder='Search Recipe' />
				<button type='submit'>
					<i className='fas fa-search'></i>
				</button>
			</form>

			<p className='section-title'>{query ? `Results for ${query}` : 'Recommendations'}</p>
			<div className='recipes'>{recipes === undefined || Object.keys(recipes) === 0 ? <div>Loading...</div> : recipes.map((dish) => <Recipe key={dish.recipe.url} dish={dish.recipe} />)}</div>
		</div>
	);
};

export default Home;
