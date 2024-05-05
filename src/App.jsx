import React from "react";
import "./css/App.css";
import Header from "./Header";
import Home from "./Home";
import RecipeDetails from './RecipeDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path="/recipe/:id" element={<RecipeDetails/>}></Route>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
