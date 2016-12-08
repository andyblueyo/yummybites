import React from "react";
import {render} from "react-dom";
import App from "./components/app.jsx";
import Menu from "./components/menu.jsx";

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
            <IndexRoute component = {Menu}></IndexRoute>
            <Route path = "/menu" component = {Menu}></Route>
        </Route>
    </Router>
);

render(router, document.getElementById("app"));
