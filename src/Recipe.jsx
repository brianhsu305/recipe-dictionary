import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = (props) => {
    const convertUri = (uri) => {
        return (encodeURIComponent(uri))
    }
    return (
        <div className="recipe">
            <img src={props.dish.image} alt="dish"/>
            <div className="content">
                <div className="info">
                    <p className="recipe-label">{props.dish.label}</p>
                    <p className="recipe-calories">{props.dish.calories.toFixed(0)} cal</p>
                </div>


                <Link className="btn" to={`/recipe/${convertUri(props.dish.uri)}`}>
                    <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    )

}

export default Recipe;