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
			`/search?r=${props.match.params.id}&app_id=${APP_ID}&app_key=${APP_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				setResult(data[0]);
				console.log(result);
			});
	}, []);

	return (
		<div>
			<Link className="btn" to="/">
				Go Back
			</Link>
			{result ? (
				<div>
					<h1>Dish: {result.label}</h1>
					{result.calories ? (
						<p>
							Calories:{" "}
							{result.calories.toFixed(0)}
						</p>
					) : (
						<p>no calories</p>
					)}

					<p>servings: {result.yield}</p>
					<img src={result.image} alt="dish" />
				</div>
			) : (
				<div>Loading</div>
			)}
		</div>
	);
};
export default RecipeDetails;
