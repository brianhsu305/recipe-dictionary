import React from "react";
import "./css/App.css";
import Header from "./Header";
import Home from "./Home";
import RecipeDetails from './RecipeDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {


    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path="/recipe/:id" component={RecipeDetails}></Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
