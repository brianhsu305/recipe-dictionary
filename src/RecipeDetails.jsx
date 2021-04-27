import React, {
	useState,
	useEffect,
} from "react";
import { Link } from "react-router-dom";

const RecipeDetails = (props) => {
	const APP_ID = "c2f2cb27";
	const APP_KEY =
		"14be2a5ac3084a24d01dcf1b33431ce2";

	const [result, setResult] = useState({});

	useEffect(() => {
		fetch(
			`https://api.edamam.com/search?r=${props.match.params.id}&app_id=${APP_ID}&app_key=${APP_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				setResult(data[0]);
			});
	}, []);



	return (
		<div className="recipe-details">
			{result === undefined || Object.keys(result).length === 0  ? (
                <div>Loading ...</div>
			) : (
				<div>
                    <div className="top">
                        <div className="left">
                            <Link className="btn" to="/">
                                <i className="fas fa-chevron-left"></i>
                            </Link>
                            <div className="recipe-title">
                                <h1>{result.label}</h1>
                                <p>{result.mealType}</p>
                            </div>
                            
                        </div>
                        <img src={result.image} alt=""/>
                    </div>
                    
					<div className="specs">
                        <p><span className="highlight">{result.ingredients.length}</span>{" "}Ingredients</p>
                        <p><span className="highlight">{result.calories.toFixed(0)}</span>{" "}Calories</p>
                        <p><span className="highlight">{result.totalTime!==0 ? result.totalTime : "?"}</span>{" "}Minutes</p>
                    </div>
					
                    <div className="ingredients">
                        <div className="ingre-title">
                            <p>Ingredients:</p>
                            <p className="servings">servings: {result.yield}</p>
                        </div>
                        <ol>
                            {result.ingredientLines.map((ingredient, i) => (
                                <li key={i}><strong>{ingredient}</strong></li>
                            ))}
                        </ol>
                        <button><a href={result.url}>Cehck original recipe</a></button>
                    </div>
				</div>
			)}
		</div>
	);
};
export default RecipeDetails;
