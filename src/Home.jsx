import React, {
	useState,
	useEffect,
} from "react";
import Recipe from "./Recipe";

const Home = () => {
	const APP_ID = "c2f2cb27";
	const APP_KEY =
		"14be2a5ac3084a24d01dcf1b33431ce2";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuety] = useState("chicken");

	//run whenever the item in array changes
	useEffect(() => {
		fetch(
			`/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		)
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
		setSearch("");
	};

	return (
		<div className="home">
			<form
				onSubmit={getSearch}
				className="search"
			>
				<input
					type="text"
					value={search}
					onChange={updateSearch}
					placeholder="Search"
				/>
				<button type="submit">
					{" "}
					<i className="fas fa-search"></i>{" "}
				</button>
			</form>

			<p className="section-title">
				Recommendations
			</p>
			<div className="recipes">
				{recipes ? (
					recipes.map((dish) => (
						<Recipe
							key={dish.recipe.url}
							dish={dish.recipe}
						/>
					))
				) : (
					<div>
                        <p>Loading...</p>
                    </div>
				)}
			</div>
		</div>
	);
};

export default Home;
