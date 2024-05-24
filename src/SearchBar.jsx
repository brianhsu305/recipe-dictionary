import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
	const [search, setSearch] = useState('');
	const [query, setQuety] = useState('');
	const navigate = useNavigate();

	//run whenever query changes
	useEffect(() => {
		if (query.length !== 0) {
			fetch(`https://api.edamam.com/search?q=${query}&app_id=${import.meta.env.VITE_ID}&to=30&app_key=${import.meta.env.VITE_KEY}`)
				.then((res) => res.json())
				.then((data) => {
					//navigate to results page
					navigate(`/query/${query}`, { state: { results: data.hits } });
				});
		}
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
		<div className='flex flex-col text-center align-middle gap-2 w-full'>
			<form onSubmit={getSearch} className='flex bg-white px-2 rounded'>
				<input type='text' value={search} onChange={updateSearch} placeholder='Search Recipe' className='w-full p-2 rounded' />
				<button type='submit'>
					<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
						<path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
					</svg>
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
