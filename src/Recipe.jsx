import React from "react";

const Recipe = (props) => {
	const convertUri = (uri) => {
		return encodeURIComponent(uri);
	};
	return (
		<div className='recipe'>
			<a href={`/recipe/${convertUri(props.dish.uri)}`}>
				<img src={props.dish.image} alt='dish' />
				<div className='content'>
					<p className='recipelabel'>{props.dish.label}</p>
					<p className='recipediet'>Diet label: {' '}
					<span>
						{props.dish.dietLabels[0] ? props.dish.dietLabels[0] : "none"}
					</span></p>
					<p>{props.dish.calories.toFixed(0)} cal</p>
				</div>
			</a>
		</div>
	);
};

export default Recipe;
