import React, { useEffect, useState } from "react";
import "./css/App.css";
import Recipe from './Recipe';

const App = () => {
    const APP_ID = "c2f2cb27";
    const APP_KEY = "14be2a5ac3084a24d01dcf1b33431ce2";

    const [recipes, setRecipes] = useState([]);
    const [search,setSearch] = useState('');
    const [query, setQuety] = useState('chicken');


    //run whenever the item in array changes 
    useEffect(() => {
        const getRecipe = async () => {
            const repsonse = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
            const data = await repsonse.json();
            setRecipes(data.hits);
            console.log('hello'+data);
        };
        getRecipe()
    }, [query]);



    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuety(search);
        setSearch('');
    };

    return (
        <div className="App">
            <h1 className="title">Recipe Dictionary</h1>
            <form onSubmit={getSearch} className="search-form">
                <input type="text" className="search-bar" value={search} onChange = {updateSearch} placeholder="What's cooking? E.g. &quot;Chicken&quot;"/>
                <button className="search-button" type="submit"> Search</button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe 
                        key={recipe.recipe.url} 
                        title={recipe.recipe.label} 
                        calories={recipe.recipe.calories} 
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
