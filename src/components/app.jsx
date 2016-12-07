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
                    <nav className = "navbar navbar-inverse">
                        <ul className = "nav navbar-nav navbar-right">
                            <li>
                                <a href="./index.html">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="./about.html">
                                    About
                                </a>
                            </li>
                            <li>
                                <IndexLink to="/menu" activeClassName="active">
                                    Menu
                                </IndexLink>
                            </li>
                            <li>
                                <a href="./index.html" >
                                    Webcam
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

