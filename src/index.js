import React from "react";
import {render} from "react-dom";
import App from "./components/app.jsx";
import Home from "./components/home.jsx";
import Menu from "./components/menu.jsx";
import Gallery from "./components/gallery.jsx";
import Cart from "./components/cart.jsx";

// Stylesheet: Material Design Lite
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import {Router, Route, IndexRoute, hashHistory} from "react-router";

//import our stylesheet so webpack puts it into the bundle
import "./css/main.css";
//TODO: replace the JSX here with a Router configuration
//from the react router module (already a dependency in package.json)

var router = (
    <Router history = {hashHistory}>
        <Route path="/" component = {App}>
            <IndexRoute component = {Home}></IndexRoute>
            <Route path = "/menu" component = {Menu}></Route>
            <Route path = "/gallery" component = {Gallery}></Route>
            <Route path = "/cart" component = {Cart}></Route>
        </Route>
    </Router>
);

render(router, document.getElementById("app"));
