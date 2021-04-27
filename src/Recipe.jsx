import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = (props) => {
    const convertUri = (uri) => {
        return (encodeURIComponent(uri))
    }
    return (
        <div className="recipe m-1">
            <Link className="text-decoration-none" to={`/recipe/${convertUri(props.dish.uri)}`}>
                {/* <i className="fas fa-arrow-right text-white"></i> */}
                <img className="" src={props.dish.image} alt="dish"/>
                <div className="content ">
                    <p className="recipe-label text-dark">{props.dish.label}</p>
                    <p style={{color:'#747474'}}>{props.dish.calories.toFixed(0)} cal</p>
                </div>
            </Link>
        </div>
    )

}

export default Recipe;