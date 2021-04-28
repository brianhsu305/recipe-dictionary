import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <Link to="/" className="title text-center text-dark my-1">Recipe Dictionary</Link>
            </div>
        </div>
    )
}

export default Header;