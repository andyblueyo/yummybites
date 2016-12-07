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
<<<<<<< HEAD
                <nav>
                    <ul>
                        <li>
                            <IndexLink to="/" activeClassName="active">
                                Home
                            </IndexLink>
                        </li>
                        <li>
                            <Link to="/menu" activeClassName="active">
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery" activeClassName="active">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" activeClassName="active">
                                cart
                            </Link>
                        </li>
                    </ul>
                </nav>
=======
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
                
>>>>>>> origin/master
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

