import React, { useState } from 'react';

const Recipe = ({title, image, calories, ingredients}) => {

    const [reveal, setReveal] = useState(false);

    const handleClick = () => {
        setReveal(!reveal);
        console.log(reveal);
    }

    if (reveal) {
        return (
            <div className="recipeDetail">
                <button className="minimize" onClick={handleClick}>minimize</button>
                <div className="container">
                    <div className="left">
                        <h1 className="detailtitle">{title}</h1>
                        <img src={image} alt="dish image" className="detailimage"/>
                        <p>{calories.toFixed(0)} cal</p>
                    </div>
                    
                    <ol>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.text}</li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    } 
    return (
       <button className="recipe" onClick={handleClick}>
            <img className="recipeimage" src={image} alt="dish image"/>
            <p className="recipetitle">{title}</p>            
       </button> 
    );
}

export default Recipe;