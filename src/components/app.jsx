import React from "react";
import "../css/main.css";


import {Link, IndexLink} from "react-router";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
    <header>
        <div className="container">
            <div className="navbar nav-tabs" >
                    <div className="container">
                        <div className="col-xs-4">
                            <ul className = "nav navbar-nav pull-right">
                                <li>
                                    <a id="menuNav" href="./index.html" >
                                        Home
                                    </a>
                                </li>
                                <li className = "active">
                                    <a id="menuNav" href="./about.html" >
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div id="logoDiv" className="col-xs-4">
                            <img id="logo" src="./src/img/logo.jpeg" alt=""></img>
                        </div>

                        <div className="col-xs-4">
                            <ul className = "nav navbar-nav pull-left">
                                <li>
                                    <a id="menuNav" href="./menu.html" >
                                        Menu
                                    </a>
                                </li>
                                <li className = "active">
                                    <a id="menuNav" href="./contact.html" >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

