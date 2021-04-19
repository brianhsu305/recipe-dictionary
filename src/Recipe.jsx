import React, { useState } from 'react';

const Recipe = (props) => {

    const [reveal, setReveal] = useState(false);

    const handleClick = () => {
        setReveal(!reveal);
    }
    
    if (reveal) {
        return (
            <div className="recipedetail">
                <button onClick={handleClick}><i className="fas fa-times"></i></button>
                <div className="container">
                    <h1>{props.title}</h1>
                    <p>{props.calories.toFixed(0)} cal</p>
                </div>
                <div className="info">
                    <img src={props.image} alt="dish" className="detailimage"/>
                    <ol>
                    {props.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.text}</li>
                    ))}
                    </ol>
                </div>
            </div>
        )
    } 
    return (
       <button className="recipe" onClick={handleClick}>
            <img src={props.image} alt="dish"/>
            <p>{props.title}</p>            
       </button> 
    );
}

export default Recipe;