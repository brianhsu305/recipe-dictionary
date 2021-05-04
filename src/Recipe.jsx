import React from "react";
import { Link } from 'react-router-dom';

const Recipe = (props) => {
	const convertUri = (uri) => {
		return encodeURIComponent(uri);
	};
	return (
		<div className='recipe'>
			<Link to={`/recipe/${convertUri(props.dish.uri)}`}>
				<img src={props.dish.image} alt='dish' />
				<div className='content'>
					<p className='recipelabel'>{props.dish.label}</p>
					<p className='recipediet'>Diet label: {' '}
					<span>
						{props.dish.dietLabels[0] ? props.dish.dietLabels[0] : "none"}
					</span></p>
					<p>{props.dish.calories.toFixed(0)} cal</p>
				</div>
			</Link>
		</div>
	);
};

export default Recipe;
