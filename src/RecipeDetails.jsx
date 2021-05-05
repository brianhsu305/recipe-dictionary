import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipeDetails = (props) => {
	const APP_ID = "c2f2cb27";
	const APP_KEY = "14be2a5ac3084a24d01dcf1b33431ce2";

	const [result, setResult] = useState({});

	useEffect(() => {
		fetch(`https://api.edamam.com/search?r=${props.match.params.id}&app_id=${APP_ID}&app_key=${APP_KEY}`)
			.then((res) => res.json())
			.then((data) => {
				setResult(data[0]);
				console.log(data[0]);
			});
	}, []);

	return (
		<div className='recipedetails container'>
			{result === undefined || Object.keys(result).length === 0 ? (
				<div>Refresh the page after 1 minute</div>
			) : (
				<div>
					<section className='main' id="main">
						<div className="title">
							<h2>{result.label}</h2>
							<Link to="/">
								<i className="fas fa-arrow-left"></i>
								<p>Go Back</p>
							</Link>
						</div>
						
						<div className="content">
							<img src={result.image} alt='dish' />
							<div className='healthlabels'>
								<h5>Health Labels</h5>
								<p>
									{result.healthLabels.map((item, i) => (
										<span key={i}>{item}; </span>
									))}
								</p>
							</div>
						</div>
						
					</section>
					<div className='divider'></div>
					<section className='ingredients'>
						<h5>Ingredients</h5>
						<p className='servings'>for {result.yield} servings</p>
						{result.ingredientLines.map((item, i) => (
							<p key={i}>{item}</p>
						))}
					</section>
					<div className='divider'></div>
					<section className='nutrients'>
						<h5>Nutrients</h5>
						<p>
							<strong>Per serving: </strong>
							<span>{(result.calories / result.yield).toFixed(0)} calories; </span>
							{Object.values(result.totalNutrients).map((item, i) => (
								<span key={i}>
									{item.label} {(item.quantity / result.yield).toFixed(0)}
									{item.unit};{" "}
								</span>
							))}
						</p>
						<a href={result.url}>Check original recipe</a>
					</section>
					<div className="footer">
						<a href="#main">
							<p>Back to top</p>
						</a>
					</div>
				</div>
			)}
		</div>
	);
};
export default RecipeDetails;
