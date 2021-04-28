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
		<div className="recipe-details container">
			{result === undefined || Object.keys(result).length === 0  ? (
                <div>Loading ...</div>
			) : (
				<div>
                    <section className="d-flex justify-content-between">
                        <div className="left align-items-between">
                            <img className="mb-3 w-50" src={result.image} alt="dish"/>
                            <h3>{result.label}</h3>
                            <p>{result.mealType}</p>
                        </div>
                        <div className="right d-flex align-items-end">
                        <div className="justify-content-between my-2 text-end">
                                <p><span className="highlight">{result.ingredients.length}</span>{" "}Ingredients</p>
                                <p><span className="highlight">{result.calories.toFixed(0)}</span>{" "}Calories</p>
                                <p><span className="highlight">{result.totalTime!==0 ? result.totalTime : "?"}</span>{" "}Minutes</p>
                            </div>
                        </div>
                        <Link className="btn btn-lg" to={`/`}>
                            <i className="fas fa-reply"></i>
                        </Link>
                    </section>

                    <div className="ingredients mt-2">
                        <div className="d-flex justify-content-between p-3">
                            <h3>Ingredients:</h3>
                            <p style={{color:'#747474'}}>{result.yield} servings</p>
                        </div>
                        <ol>
                            {result.ingredientLines.map((ingredient, i) => (
                                <li key={i}><strong>{ingredient}</strong></li>
                            ))}
                        </ol>
                        <button><a href={result.url}>Original recipe</a></button>
                    </div>
				</div>
			)}
		</div>
	);
};
export default RecipeDetails;
